import * as FireApp from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// console.log(process.env.NEXT_PUBLIC_FIREBASE_CONFIG);

const firebaseConfig = JSON.parse(process.env.NEXT_PUBLIC_FIREBASE_CONFIG);

// Initialize Firebase
// Se valida si ya esta inicializada
const firebase = FireApp.apps.length
  ? FireApp.app()
  : FireApp.initializeApp(firebaseConfig);

const db = FireApp.firestore();
const auth = FireApp.auth();
const googleProvider = new FireApp.auth.GoogleAuthProvider();
const facebookProvider = new FireApp.auth.FacebookAuthProvider();


export { firebase, db, auth, googleProvider, facebookProvider };