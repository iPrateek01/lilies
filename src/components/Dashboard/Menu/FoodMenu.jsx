import { motion } from "framer-motion";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { auth, db } from "../../../firebase/firebase";
import { Suspense, lazy } from "react";

const FoodItemCard = lazy(() => import("./FoodItemCard"));

function FoodMenu() {
  const [foodItems, setFoodItems] = useState([]);
  const [searchItem, setSearchItem] = useState("");

  useEffect(() => {
    const fetchFoodItems = async () => {
      try {
        const foodItemsRef = collection(db, "foodItems");
        const snapshot = await getDocs(foodItemsRef);
        const items = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setFoodItems(items);
      } catch (error) {
        console.error("Error fetching food items:", error);
      }
    };

    fetchFoodItems();
  }, []);

  // const renderFoodItemCard = useCallback(, []);

  return (
    <>
      <div className="w-full h-screen bg-white flex flex-col place-items-center p-4 overflow-auto">
        <div>
          <motion.h1
            className="text-3xl font-bold text-center text-black"
            initial={{ opacity: 0, filter: "blur(10px)" }} // Initial state (fully visible, no blur)
            animate={{ opacity: 1, filter: "blur(0px)" }} // Animation state (fade out and blur)
            transition={{ duration: 1 }} // Duration of animation
          >
            Welcome {auth?.currentUser?.displayName}!
          </motion.h1>
        </div>
        <div className="flex flex-row justify-center flex-wrap gap-5 sm:gap-10 lg:mx-10 my-5">
          {foodItems.filter((item) => 
    // Render all items if searchItem is empty, or check if item name contains the searchItem string
    searchItem === "" || item.name.toLowerCase().includes(searchItem.toLowerCase())
  ).map((item) => (
            <Suspense
              fallback={
                <div className="flex w-52 flex-col gap-4">
                  <div className="skeleton h-32 w-full"></div>
                  <div className="skeleton h-4 w-28"></div>
                  <div className="skeleton h-4 w-full"></div>
                  <div className="skeleton h-4 w-full"></div>
                </div>
              }
              key={item.id}
            >
              <FoodItemCard key={item.id} item={item} />
            </Suspense>
          ))}
        </div>
        <div className="fixed z-10 bottom-0 p-2 flex justify-center">
          <label className="input input-bordered flex items-center gap-2 min-w-96 rounded-full bg-gradient-to-r from-emerald-400 to-rose-400 text-black shadow-lg">
            <input
              type="text"
              value={searchItem}
              onChange={(e) => setSearchItem(e.target.value)}
              className="grow min-w-0 placeholder-black"
              placeholder="Search"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>
      </div>
    </>
  );
}

export default FoodMenu;
