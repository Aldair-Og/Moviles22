
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBZs9pQ2ibNEldUvjBEqqpuOezAlRnrRJ0",
  authDomain: "mi-proyecto-de73d.firebaseapp.com",
  databaseURL: "https://mi-proyecto-de73d-default-rtdb.firebaseio.com",
  projectId: "mi-proyecto-de73d",
  storageBucket: "mi-proyecto-de73d.firebasestorage.app",
  messagingSenderId: "45113966134",
  appId: "1:45113966134:web:7cf5bbdde4fdc6f86de297"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);