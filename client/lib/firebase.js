import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "firebase/functions";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGE_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const env = process.env.NODE_ENV;

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Auth exports
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

// Firestore exports
export const firestore = firebase.firestore();
export const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp;
export const fromMillis = firebase.firestore.Timestamp.fromMillis;
export const increment = firebase.firestore.FieldValue.increment;
export const fieldValue = firebase.firestore.FieldValue;

// Functions exports
export const functions = firebase.app().functions();

// Emulators if working locally
if (env === "development") {
  firestore.useEmulator("localhost", 8080);
  functions.useEmulator("localhost", 5001);
  auth.useEmulator("http://localhost:9099");
}
