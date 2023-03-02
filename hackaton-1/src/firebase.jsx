// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDir8WWG4uBo3NgB7RIDkKL7nCH3hJw940",
  authDomain: "hackathon-1-197b7.firebaseapp.com",
  projectId: "hackathon-1-197b7",
  storageBucket: "hackathon-1-197b7.appspot.com",
  messagingSenderId: "904580970281",
  appId: "1:904580970281:web:a656ae650221e2937ee938"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export{app, auth};

