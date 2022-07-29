// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrR7hpyolge1ft0XX4-0MkGG4mqfxqHVc",
  authDomain: "dragonwareapp.firebaseapp.com",
  projectId: "dragonwareapp",
  storageBucket: "dragonwareapp.appspot.com",
  messagingSenderId: "357255091179",
  appId: "1:357255091179:web:40e8f2729c3de691c7bfae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);