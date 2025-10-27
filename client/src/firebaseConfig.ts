import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBKSJMOFh1xN9tWrGidWc_kdprlY68L_j4", // must be Web API key
  authDomain: "ecommerce-learning-app-63ccd.firebaseapp.com",
  projectId: "ecommerce-learning-app-63ccd",
  storageBucket: "ecommerce-learning-app-63ccd.appspot.com",
  messagingSenderId: "648327235287",
  appId: "1:648327235287:web:562d5428612d609d5bd292"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
