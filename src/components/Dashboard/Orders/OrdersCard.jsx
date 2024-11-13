// import React from 'react'

function OrdersCard() {
  return (
    <>
    <div className="flex flex-col justify-center items-center gap-3 bg-gray-300 rounded-xl p-5">
        <div className="flex justify-center items-center text-gray-700 text-xl">CartInfoForPriorOrder</div>
        <hr className="h-0.5 w-full bg-gray-900"/>
        <div className="flex justify-center items-center text-gray-700 text-xl">TotalPricePaid</div>
        <hr className="h-0.5 w-full bg-gray-900"/>
        <div className="flex justify-center items-center text-gray-700 text-xl w-full">
            <button className="btn w-5/6">
                Reorder
            </button>
        </div>
        
    
    </div>
    </>
  )
}

export default OrdersCard