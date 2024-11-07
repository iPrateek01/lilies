import { collection, doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from './firebase.js';  // Your Firebase config
import foodData from '../../data/foodData.json' assert { type: 'json' };  // Your JSON file

const updateData = async () => {
  try {
    const foodItemsRef = collection(db, 'foodItems');  // Firestore collection name

    // Loop through each food item in the JSON file and update it in Firestore
    for (let item of foodData) {
      // Reference the document by unique identifier (e.g., item.name)
      const itemDocRef = doc(foodItemsRef, item.name);

      // Check if the document exists
      const docSnapshot = await getDoc(itemDocRef);
      if (docSnapshot.exists()) {
        // If it exists, update the document
        await updateDoc(itemDocRef, {
          name: item.name,
          description: item.description,
          price: item.price,
          category: item.category,
          image: item.image,
          allergens: item.allergens,
          review: item.review,
          servingSize: item.servingSize,
          tags: item.tags
        });
        console.log(`Updated: ${item.name}`);
      } else {
        console.log(`Skipped: ${item.name} (Document does not exist)`);
      }
    }

    console.log('Data update process complete!');
  } catch (error) {
    console.error('Error updating data:', error);
  }
};

updateData();
