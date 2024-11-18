import { Helmet } from "react-helmet";
import CartCard from "./CartCard";
import { useSelector, useDispatch } from "react-redux";
import { setCart } from "../../../features/cart/cartSlice";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../../firebase/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

function Cart() {

  const cartItems = useSelector((state) => state.cart.items)
  const cartPrice = useSelector((state) => state.cart.totalPrice)
  const cartQuantity = useSelector((state) => state.cart.totalQuantity)
  // console.log(cartItems)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const newOrder = {
    uid: auth?.currentUser?.uid,
    items: cartItems,
    pricePaid: cartPrice,
    createdAt: serverTimestamp() || new Date()
  }

  const handlePlaceOrder = async() => {
    try {
      if (cartItems.length > 0) {

        await addDoc(collection(db, 'orderHistory'), newOrder)

        dispatch(setCart({
          items: [],
          totalQuantity: 0,
          totalPrice: 0,
        }))
        console.log()
        alert('Order Placed Successfully')
        navigate("/dashboard")
      }
      else{
        alert('You need to add items before placing an order.')
      }
    } catch (error) {
      console.error('Failed to place the order', error) 
      alert('Failed to place the order.')
    }
  }


  return (
    <>
      <div className="flex flex-col w-full h-screen justify-start items-center bg-white p-10 my-2 gap-5">
        <Helmet>
          <title>Lilies - Cart</title>
        </Helmet>
        { cartItems.length === 0 ? <p>
          Cart is empty
        </p> : cartItems.map((item) => 

          <CartCard key={item.id} item={item}/>
        )
        }
        <hr className="h-0.5 bg-black w-full" />
        <div className="w-full flex flex-col gap-9 p-2 justify-center items-center">
        <p className=" text-stone-500 font-semibold text-xl">
         Total Items in Cart : {cartQuantity}
        </p>
        <p className="text-xl font-semibold text-stone-500">
          Total amount to pay : ${cartPrice.toFixed(2)}
        </p>
        </div>
        <div className="fixed z-10 bottom-0 p-4 mb-5 flex justify-center">
          <button onClick={handlePlaceOrder} className="btn border-none bg-red-100 shadow-md rounded-xl text-2xl text-gray-600">
           Place Order
          </button>
        </div>
      </div>
    </>
  );
}

export default Cart;
