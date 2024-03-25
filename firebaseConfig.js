// firebaseConfig.js
import { initializeApp } from '@firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyCl-an8koZ0QbMfL6PahYlO5SuPOzyQEpg",
  authDomain: "winged-bonito-417718.firebaseapp.com",
  projectId: "winged-bonito-417718",
  storageBucket: "winged-bonito-417718.appspot.com",
  messagingSenderId: "995129372816",
  appId: "1:995129372816:web:d596b2a60ff9a9f90d6815",
  measurementId: "G-LWQPZGG7F3"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

export default app; // Export the initialized app
