import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Web app config file
const firebaseConfig = {
  apiKey: "AIzaSyBvzkDigW4wgRvq0vEbs3M8COZD9ZrbY3Q",
  authDomain: "optom-rx-dcb2e.firebaseapp.com",
  projectId: "optom-rx-dcb2e",
  storageBucket: "optom-rx-dcb2e.appspot.com",
  messagingSenderId: "1057936692796",
  appId: "1:1057936692796:web:851c581c23ee6300db1539"
};

// Initialise Firebase
const app = initializeApp(firebaseConfig);

// Initialise Firestore database
const db = getFirestore(app);

// Initialise Firebase authentication
const auth = getAuth(app);

export { db, auth }