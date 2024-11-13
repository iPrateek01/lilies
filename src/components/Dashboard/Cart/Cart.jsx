import CartCard from "./CartCard"


function Cart() {
  return (
    <>
    <div className="flex flex-col w-full h-screen justify-start items-center bg-white p-10 my-2 gap-5">
      <CartCard />
      <CartCard />
      <hr className="h-0.5 bg-black w-full"/>
      <p className="w-full text-right text-xl font-semibold text-black">Total Price</p>
      <div className="fixed z-10 bottom-0 p-4 mb-5 flex justify-center">
      <button className="btn border-none bg-red-100 shadow-md rounded-xl text-2xl">
        Continue to Payments
      </button>
    </div>

    </div>

    
    </>
  )
}

export default Cart