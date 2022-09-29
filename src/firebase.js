import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "@firebase/storage";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBhWYDLle-OwlC8Z1eNfFfZsvn8rIGAhCI",
  authDomain: "react-chat-6c795.firebaseapp.com",
  projectId: "react-chat-6c795",
  storageBucket: "react-chat-6c795.appspot.com",
  messagingSenderId: "224949940893",
  appId: "1:224949940893:web:fc9fb60c0c49ab1c3b9a74"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();