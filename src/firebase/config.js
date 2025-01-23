// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnLPGnktT3ZJUscvCQ0UtINnr1y9Be02E",
  authDomain: "dublin-f482a.firebaseapp.com",
  projectId: "dublin-f482a",
  storageBucket: "dublin-f482a.firebasestorage.app",
  messagingSenderId: "1098978620130",
  appId: "1:1098978620130:web:46d407e3dae166c78464bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };