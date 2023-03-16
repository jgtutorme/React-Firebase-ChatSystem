import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBMuv6nA2UXHJMf78e0Anv7H0oK6tGA4Lo",
  authDomain: "gdscbloodbank.firebaseapp.com",
  projectId: "gdscbloodbank",
  storageBucket: "gdscbloodbank.appspot.com",
  messagingSenderId: "640043252981",
  appId: "1:640043252981:web:119f5c7f1b84024911d9bc",
  measurementId: "G-RQJBZFH6QW",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
