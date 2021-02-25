import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyDYHbN-DWoQud-alMKkX32hqXgjKcivLaE",
  authDomain: "hr-management-development.firebaseapp.com",
  projectId: "hr-management-development",
  storageBucket: "hr-management-development.appspot.com",
  messagingSenderId: "514029664071",
  appId: "1:514029664071:web:2accb57aba7fe1c1b67e62",
});

// export const database = firebaseConfig.database();
export const firestore = firebaseConfig.firestore();
export const auth = firebaseConfig.auth();
