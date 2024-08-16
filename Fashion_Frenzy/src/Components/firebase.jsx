import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-kn7vSRxThIz5fUSBhSZTyzWdEy5ZJao",
  authDomain: "my-phase-2-project.firebaseapp.com",
  projectId: "my-phase-2-project",
  storageBucket: "my-phase-2-project.appspot.com",
  messagingSenderId: "237798619392",
  appId: "1:237798619392:web:2a952797008c8327ee9be5",
  measurementId: "G-Q46QJ0WTB4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Authentication
const auth = getAuth(app);

export { auth };
