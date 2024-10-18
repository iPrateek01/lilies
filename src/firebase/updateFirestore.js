import { collection, doc, setDoc } from 'firebase/firestore';
import { db } from './firebase.js';  // Your Firebase config
import foodData from '../../data/foodData.json' assert { type: 'json' };  // Your JSON file

const uploadData = async () => {
  try {
    const foodItemsRef = collection(db, 'foodItems');  // Firestore collection name

    // Loop through each food item in the JSON file and upload/update it to Firestore
    for (let item of foodData) {
      // Create a unique document ID (you can use name, or id from your data, or generate one)
      const itemDoc = doc(foodItemsRef, item.name);  // Use 'name' or another unique field as document ID

      // Use setDoc to overwrite existing data or create new if it doesn't exist
      await setDoc(itemDoc, {
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
      console.log(`Uploaded/Updated: ${item.name}`);
    }

    console.log('All data successfully uploaded or updated!');
  } catch (error) {
    console.error('Error uploading data:', error);
  }
};

uploadData();