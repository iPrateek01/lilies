// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth, GoogleAuthProvider} from "firebase/auth"
import { getStorage } from "firebase/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiAj5kWRM2omfzkEmW-YRhHPdX-osHRoQ",
  authDomain: "lilies-iprateek01.firebaseapp.com",
  projectId: "lilies-iprateek01",
  storageBucket: "lilies-iprateek01.appspot.com",
  messagingSenderId: "762973914436",
  appId: "1:762973914436:web:f04e196a9d8fc59e514311",
  measurementId: "G-QZGM1DYEQH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app)

export { auth, provider, db, storage}