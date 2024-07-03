// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdgOjFpzV4JeOIeQjO5-ETZ95jxhBuYKw",
  authDomain: "mario-bdfb7.firebaseapp.com",
  projectId: "mario-bdfb7",
  storageBucket: "mario-bdfb7.appspot.com",
  messagingSenderId: "192558159302",
  appId: "1:192558159302:web:e1f6cc7bc20a79847c8ec7",
  measurementId: "G-MZJFTWG1FE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
