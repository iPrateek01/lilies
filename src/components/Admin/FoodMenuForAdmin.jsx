import { useEffect, useState } from "react";
import { db } from "../../firebase/firebase";
import { deleteDoc, doc, collection, onSnapshot } from "firebase/firestore";
import { lazy, Suspense } from "react";

const FoodItemCard = lazy(() =>
  import("../../components/Admin/FoodItemCardForAdmin")
);

function FoodMenuForAdmin() {
  const [foodItems, setFoodItems] = useState([]);

  // Real-time listener to fetch and monitor updates to food items
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "foodItems"), (snapshot) => {
      const foodItemsList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setFoodItems(foodItemsList); // This will automatically update the UI
    });

    return () => unsubscribe(); // Cleanup listener on unmount
  }, []);

  // Delete food item function
  const deleteFoodItem = async (id) => {
    try {
      const foodItemDoc = doc(db, "foodItems", id);
      await deleteDoc(foodItemDoc); // Delete from Firestore
      console.log(`Food item with ID ${id} deleted successfully.`);
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  };

  return (
    <>
      <div className="flex flex-row justify-center flex-wrap gap-5 sm:gap-10 lg:mx-10 my-5">
        {foodItems.length === 0 ? (
          <p>No food items available.</p>
        ) : (
          foodItems.map((item) => (
            <Suspense
              fallback={
                <div className="flex w-52 flex-col gap-4">
                  <div className="skeleton h-32 w-full"></div>
                  <div className="skeleton h-4 w-28"></div>
                  <div className="skeleton h-4 w-full"></div>
                  <div className="skeleton h-4 w-full "></div>
                </div>
              }
              key={item.id}
            >
              <FoodItemCard
                key={item.id} // Ensure key is set to unique item.id
                item={item}
                deleteFoodItem={deleteFoodItem} // Pass delete function to FoodItemCard
              />
            </Suspense>
          ))
        )}
      </div>
    </>
  );
}

export default FoodMenuForAdmin;
