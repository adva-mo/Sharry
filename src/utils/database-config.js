import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA6tb5k4VdxE9aLnfzC0iTo7cPxdQkNtIo",
  authDomain: "sharry-1319e.firebaseapp.com",
  databaseURL:
    "https://sharry-1319e-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "sharry-1319e",
  storageBucket: "sharry-1319e.appspot.com",
  messagingSenderId: "438108544686",
  appId: "1:438108544686:web:2bcee757b34cf03da5573f",
  measurementId: "G-P7718ZRZRQ",
};
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
