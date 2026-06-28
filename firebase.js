// Firebase v11
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBMO6BGkLT6LNYLZJbmghmNeOmgqzquXjo",
  authDomain: "mubarak-enterprise-pos.firebaseapp.com",
  projectId: "mubarak-enterprise-pos",
  storageBucket: "mubarak-enterprise-pos.firebasestorage.app",
  messagingSenderId: "631510451226",
  appId: "1:631510451226:web:1c36b45bdfb2bf9538fda3",
  measurementId: "G-14FXK18W73"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
