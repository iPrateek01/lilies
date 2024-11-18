import { Helmet } from "react-helmet";
import OrdersCard from "./OrdersCard";
import { useState, useEffect } from "react";
import { auth, db } from "../../../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";

function Orders() {
  const [orderHistory, setorderHistory] = useState([]);

  useEffect(() => {
    try {
      const fetchOrderHistory = async () => {
        const orderHistoryRef = collection(db, "orderHistory");
        const snapshot = await getDocs(orderHistoryRef);
        const items = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        const myItems = items.filter((item) => item.uid === auth?.currentUser?.uid)
        setorderHistory(myItems);
      };
      fetchOrderHistory();
    } catch (error) {
      console.error("Failed to fetch order history", error);
    }
  }, []);
  // console.log(orderHistory);

  return (
    <>
      <Helmet>
        <title>Lilies - Orders</title>
      </Helmet>
      <div className="flex flex-col w-full flex-wrap overflow-auto p-2 gap-5">
        {orderHistory.length > 0 ?
        orderHistory.map((item) => (
        <OrdersCard key={item.id} item={item} />
        )) : <p className="w-full text-center">No Orders Yet</p>}

      </div>
    </>
  );
}

export default Orders;
