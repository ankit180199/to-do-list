import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCKSsknrUIcMhvVx0UKGCWuqcSQ4wczfKg",
  authDomain: "to-do-app-cf368.firebaseapp.com",
  databaseURL: "https://to-do-app-cf368-default-rtdb.firebaseio.com",
  projectId: "to-do-app-cf368",
  storageBucket: "to-do-app-cf368.appspot.com",
  messagingSenderId: "776569442942",
  appId: "1:776569442942:web:4afcca75003b122cab3e2f",
  measurementId: "G-5R2RL8R1PL"
};

// Initialize Firebase
//const analytics = getAnalytics(app);

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth();
