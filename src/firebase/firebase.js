
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import firebase from 'firebase/app';
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { doc, getDoc, getFirestore } from "firebase/firestore";
//wtf?REACT_APP_FIREBASE_DATABASE_URL=
import { getPerformance } from "firebase/performance";
const firebaseConfig = {
    apiKey: Process.env.API_KEY,
    authDomain: Process.env.AUTH_DOMAIN,
    projectId: Process.env.PROJECT_ID,
    storageBucket:Process.env.STORAGE_BUCKET,
    messagingSenderId: Process.env.MASAGING_ID,
    appId:Process.env.APP_ID

};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth= getAuth(app)
export const provider = new GoogleAuthProvider();
export const db = getFirestore()
//export const db = firebase.firestore();
const perf = getPerformance(app)


export default app;





