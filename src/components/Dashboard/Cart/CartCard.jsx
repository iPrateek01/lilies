import { useDispatch } from "react-redux"
import { addItemToCart, removeItemFromCart } from "../../../features/cart/cartSlice"
import PropTypes from "prop-types"

function CartCard({item}) {
  // console.log(item)
  const dispatch = useDispatch()
  // const selector = useSelector()



  return (
    <>
    <div className="flex flex-row w-full justify-between items-center text-white text-xl p-4 rounded-lg bg-zinc-500 shadow-md">
      <div className="flex flex-1 justify-center">{item.name}</div>
      <div className="flex flex-1 flex-row flex-nowrap gap-5 justify-center">
        <button onClick={() => dispatch(removeItemFromCart(item.id))} className="text-red-500">-</button>
        <p>{item.quantity}</p>
        <button onClick={() => dispatch(addItemToCart(item))} className="text-green-500">+</button>
      </div>
      <div className="flex flex-1 justify-center">
        ${(item.totalPrice).toFixed(2)}
      </div>
    </div>
    </>
  )
}

CartCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    totalPrice: PropTypes.number.isRequired,
  }).isRequired,
};

export default CartCard

