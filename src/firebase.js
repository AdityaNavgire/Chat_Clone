import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDntVakgSBk7dz8QvaRO1H0C6t9z2uSR3c",
  authDomain: "chat-a121a.firebaseapp.com",
  projectId: "chat-a121a",
  storageBucket: "chat-a121a.appspot.com",
  messagingSenderId: "769462891989",
  appId: "1:769462891989:web:034f2d6190ef311b3c395c",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();