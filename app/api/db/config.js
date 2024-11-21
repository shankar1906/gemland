import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBYJ1yd99NXy_K2sp74V2ASWNnM5_1dpOU",
  authDomain: "gemland-app.firebaseapp.com",
  projectId: "gemland-app",
  storageBucket: "gemland-app.appspot.com",
  messagingSenderId: "241774701807",
  appId: "1:241774701807:web:1ae5b2736f64c2a882ff1a",
  measurementId: "G-R9YE1BXGXX"
};


const app =  !getApps().length ? initializeApp(firebaseConfig) : getApp()

const db = getFirestore(app);

export {db}
