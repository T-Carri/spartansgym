
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import firebase from 'firebase/app';
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { doc, getDoc, getFirestore } from "firebase/firestore";
//wtf?REACT_APP_FIREBASE_DATABASE_URL=
import { getPerformance } from "firebase/performance";
const firebaseConfig = {
    apiKey: "AIzaSyBlIpvRRFRV18MmWtTNYYOOR-r-EINJSaw",
    authDomain: "espartans-693a2.firebaseapp.com",
    projectId: "espartans-693a2",
    storageBucket: "espartans-693a2.appspot.com",
    messagingSenderId: "375799491134",
    appId: "1:375799491134:web:3d92ebd68815aac6253f6f"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth= getAuth(app)
export const provider = new GoogleAuthProvider();
export const db = getFirestore()
//export const db = firebase.firestore();
const perf = getPerformance(app)


export default app;





