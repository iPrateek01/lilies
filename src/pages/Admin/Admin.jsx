import { useEffect } from "react";
import { auth } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import FoodMenuForAdmin from "../../components/Admin/FoodMenuForAdmin";
import AddFoodItems from "../../components/Admin/AddFoodItems";

function Admin() {
  const navigate = useNavigate();
  const creatorEmail = "iprateek01@gmail.com"; // Replace with your Firebase creator email

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user || user.email !== creatorEmail) {
        navigate("/");
      }
    });

    return () => unsubscribe(); // Clean up the listener on component unmount
  }, [navigate]);

  return (
    <>
      <div className="w-full h-screen overflow-auto bg-white">
      <div className="flex flex-row w-full justify-center items-center p-5">
            <div className="flex flex-row bg-customYellow text-customGreen p-4">
            <img src="/assets/lilies.svg" alt="" className="object-fit size-9" />
            <h1 className="text-3xl">Lilies</h1>
            </div>
            <div className="text-customYellow bg-customGreen p-4">
            <h1 className="text-3xl ">
          Admin Panel
        </h1>
            </div>
          

         
        </div>
        
        <AddFoodItems />
        <FoodMenuForAdmin />
      </div>
    </>
  );
}

export default Admin;
