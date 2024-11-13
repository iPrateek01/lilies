import OrdersCard from "./OrdersCard"


function Orders() {
  return (
    <>
    <div className="flex flex-row flex-wrap justify-start items-start w-full h-screen bg-white gap-5 p-10">
      <OrdersCard />
      <OrdersCard />
    </div>
    </>
  )
}

export default Orders