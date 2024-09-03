// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1t24YVZR9pJ4T-_WK7dRlwgsJT-XXR70",
  authDomain: "fir-react-chat-app-d4a9d.firebaseapp.com",
  projectId: "fir-react-chat-app-d4a9d",
  storageBucket: "fir-react-chat-app-d4a9d.appspot.com",
  messagingSenderId: "969878242719",
  appId: "1:969878242719:web:52d9972c2b3f3742a529aa",
  measurementId: "G-S0LKD1201X",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);
