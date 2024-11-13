import { FaStar } from "react-icons/fa6";
import PropTypes from "prop-types";

const FoodItemCard = ({ item, deleteFoodItem }) => {
  return (
    <>
      <div className="flex flex-col justify-around p-3 gap-2 bg-gradient-to-r from-green-400 to-lime-400 rounded-xl shadow-lg text-white w-11/12 sm:w-5/12 lg:w-3/12">
        <div className="">
          <img
            src={item.image}
            alt={item.name}
            loading="lazy"
            className="rounded-xl object-cover w-full h-48 bg-no-repeat bg-center"
          />
        </div>
        <div className="text-2xl font-semibold text-red-500">{item.name}</div>
        <div className="text-pink-800">{item.description}</div>
        <div className="flex flex-row justify-between text-lime-900">
          <div>{item.price} $</div>
          <div className="flex flex-row gap-1 items-center">
            {item.review} <FaStar />
          </div>
        </div>
        <div className="flex justify-center bottom-0">
          <button
            onClick={() => deleteFoodItem(item.id)} // Call the delete function passed as prop
            className="btn bg-gray-800 text-yellow-500 shadow-md min-w-full"
          >
            Discard Item
          </button>
        </div>
      </div>
    </>
  );
};

FoodItemCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired, // Ensure you have an id for each item to identify it
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
  deleteFoodItem: PropTypes.func.isRequired, // Ensure a delete function is passed as a prop
};

export default FoodItemCard;
