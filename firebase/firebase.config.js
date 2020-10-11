import * as Firebase from "firebase/app";
import "firebase/firestore";

// console.log(process.env.NEXT_PUBLIC_FIREBASE_CONFIG);

const firebaseConfig = JSON.parse(process.env.NEXT_PUBLIC_FIREBASE_CONFIG);

// Initialize Firebase
// Se valida si ya esta inicializada
const firebase = Firebase.apps.length
  ? Firebase.app()
  : Firebase.initializeApp(firebaseConfig);

const firestore = Firebase.firestore();

module.exports = {
  firebase,
  firestore,
};
