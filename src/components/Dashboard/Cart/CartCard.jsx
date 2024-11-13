// import React from 'react'

function CartCard() {
  return (
    <>
    <div className="flex flex-row w-full justify-between items-center text-white text-xl p-4 rounded-lg bg-zinc-500 shadow-md">
      <div>ItemName</div>
      <div className="flex flex-row flex-nowrap gap-5">
        <button className="text-red-500">-</button>
        <p>qty</p>
        <button className="text-green-500">+</button>
      </div>
      <div>
        Price
      </div>
    </div>
    </>
  )
}

export default CartCard