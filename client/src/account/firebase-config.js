import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDiZqjylZFXb8agKA92OeB9xHvQVAPsuSg",
  authDomain: "netflix-project-91308.firebaseapp.com",
  projectId: "netflix-project-91308",
  storageBucket: "netflix-project-91308.appspot.com",
  messagingSenderId: "932711105972",
  appId: "1:932711105972:web:5dcf3c2025fc87f53a5ee1",
  measurementId: "G-5PZTWKQBF1"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);