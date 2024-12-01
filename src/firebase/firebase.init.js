// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2cEJjNrgczqd8Jk5eK3Fwc1WRZ0fcAQM",
  authDomain: "coffee-store-1033f.firebaseapp.com",
  projectId: "coffee-store-1033f",
  storageBucket: "coffee-store-1033f.firebasestorage.app",
  messagingSenderId: "242215437708",
  appId: "1:242215437708:web:e7253f3e57556d1ec702a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);