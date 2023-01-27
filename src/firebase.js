// import firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAGjqyGDFGOjc5kDIya2vGW2ckGZc1zT2s",
  authDomain: "netflix1-clone-3dfb7.firebaseapp.com",
  projectId: "netflix1-clone-3dfb7",
  storageBucket: "netflix1-clone-3dfb7.appspot.com",
  messagingSenderId: "829252445918",
  appId: "1:829252445918:web:d79e6ded62d4525dce444f",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
