
import { CiShoppingCart } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux"
import { addItemToCart } from "../../../features/cart/cartSlice";
import { useNavigate } from "react-router-dom"


const FoodItemCard = ({ item }) => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const cartItems = useSelector((state) => state.cart.items)

  const cartItem = cartItems.find((cartItem) => cartItem.id === item.id)
  const isInCart = cartItem?.quantity > 0

  const handleClick = () => {
    if (isInCart) {
      navigate("cart")
    }
    else {
      dispatch(addItemToCart(item))
    }
  }
  
  
  return (
    <>
      <div className="flex flex-col justify-around p-3 gap-2 bg-gradient-to-r from-slate-300 rounded-xl shadow-lg text-white w-11/12 sm:w-5/12 lg:w-3/12 lg: min-w-72">
        <div className="">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          className="rounded-xl object-cover w-full h-48 bg-no-repeat bg-center"
        />
        </div>
        <div className="text-2xl font-semibold text-stone-800">{item.name}</div>
        <div className="text-zinc-800">{item.description}</div>
        <div className="flex flex-row justify-between text-stone-900">
          <div>{item.price} $ </div>
          <div className="flex flex-row gap-1 items-center">
            {item.review} <FaStar />{" "}
          </div>
        </div>
        <div className="flex justify-center bottom-0">
          <button onClick={handleClick} className="btn bg-gray-800 text-yellow-500 shadow-md min-w-full">
            {isInCart ? "Go to Cart" : "Add to Cart"} 
            <CiShoppingCart />
          </button>
        </div>
      </div>
    </>
  );
};

FoodItemCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    allergens: PropTypes.arrayOf(PropTypes.string).isRequired,
    review: PropTypes.number.isRequired,
    servingSize: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  // dispatch: PropTypes.func.isRequired,
};

export default FoodItemCard;
