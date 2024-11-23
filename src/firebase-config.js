import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzKGCgauxW_A3O-Uoel7E790j_3y-bpGA",
  authDomain: "blogproject-37c2f.firebaseapp.com",
  projectId: "blogproject-37c2f",
  storageBucket: "blogproject-37c2f.firebasestorage.app",
  messagingSenderId: "348630281865",
  appId: "1:348630281865:web:ffc04fafcb4fc2918ce058"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();