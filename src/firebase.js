import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// -- App config
const firebaseConfig = {
  apiKey: "AIzaSyDDLVjtrVjVejWCNgBpe8wXtLb4WnKnQR8",
  authDomain: "snapspace-347406.firebaseapp.com",
  projectId: "snapspace-347406",
  storageBucket: "snapspace-347406.appspot.com",
  messagingSenderId: "181493332310",
  appId: "1:181493332310:web:44f9b3a7e61cd456073ef7",
  measurementId: "G-0P1J0H0227",
};

// -- App setup
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const analytics = getAnalytics(app);

// !! No parking -- please don't park code here
