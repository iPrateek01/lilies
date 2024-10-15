// uploadFoodData.js
import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebase.js';  // Your Firebase config
import foodData from '../../data/foodData.json' assert { type: 'json' }  // Your JSON file

const uploadData = async () => {
  try {
    const foodItemsRef = collection(db, 'foodItems');  // Firestore collection name

    // Loop through each food item in the JSON file and upload it to Firestore
    for (let item of foodData) {
      await addDoc(foodItemsRef, {
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
      console.log(`Uploaded: ${item.name}`);
    }

    console.log('All data successfully uploaded!');
  } catch (error) {
    console.error('Error uploading data:', error);
  }
};

uploadData();
