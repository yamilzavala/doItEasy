import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyCX4nnr7n_VZjP-gpZu4y2hsZkXb-FjUMw",
  authDomain: "store-db-ae3c4.firebaseapp.com",
  projectId: "store-db-ae3c4",
  storageBucket: "store-db-ae3c4.appspot.com",
  messagingSenderId: "692845557911",
  appId: "1:692845557911:web:319a902c6a8219a647d1d2",
  measurementId: "G-QG5Q0485JX"
};

// Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: "select_account"});
export const signInWithGoogle = () => auth.signInWithPopup(provider)
export const signInWithGoogleRedirect = () => auth.signInWithRedirect(provider)