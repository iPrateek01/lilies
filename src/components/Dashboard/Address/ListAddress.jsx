import { useEffect, useState } from "react";
import { auth, db } from "../../../firebase/firebase";
import { deleteDoc, doc, collection, onSnapshot } from "firebase/firestore";
import { lazy, Suspense } from "react";

const AddressCard = lazy(() => import("./AddressCard"));

function ListAddress() {
  const [addressInfo, setAddressInfo] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "customerAddresses"),
      (snapshot) => {
        const customerAddresses = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setAddressInfo(customerAddresses); // Update state with fetched data
        console.log("Fetched addresses successfully");
      },
      (error) => console.error("Error fetching addresses:", error) // Catch and log Firestore errors
    );

    return () => unsubscribe(); // Cleanup listener on unmount
  }, []);

  const deleteAddress = async (id) => {
    try {
      const customerAddress = doc(db, "customerAddresses", id);
      await deleteDoc(customerAddress); // Delete from Firestore
      console.log(`Address with ID ${id} deleted successfully.`);
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  };

  const filteredAddressInfo = addressInfo.filter((item) => item.uid === auth?.currentUser?.uid)

  return (
    <>
      <div className="flex flex-row justify-center items-center flex-wrap p-4">
        {filteredAddressInfo.length === 0 ? (
          <p>No addresses available.</p>
        ) : (
          filteredAddressInfo.map((item) => (
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
              <AddressCard addressInfo={item} deleteAddress={deleteAddress} />
            </Suspense>
          ))
        )}
      </div>
    </>
  );
}

export default ListAddress;
