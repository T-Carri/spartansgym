
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import firebase from 'firebase/app';
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { doc, getDoc, getFirestore } from "firebase/firestore";
//wtf?REACT_APP_FIREBASE_DATABASE_URL=
import { getPerformance } from "firebase/performance";
const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket:process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MASAGING_ID,
    appId:process.env.APP_ID

};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth= getAuth(app)
export const provider = new GoogleAuthProvider();
export const db = getFirestore()
//export const db = firebase.firestore();
const perf = getPerformance(app)


export default app;





