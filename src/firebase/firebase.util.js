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


//strore user in db firestore
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get(); //to get the 'exists' property

  if(!snapShot.exists) {
   const {displayName, email} = userAuth;
   const createAt = new Date();
   
   try {
    await userRef.set({//create a new document in the db
      displayName,
      email,
      createAt,
      ...additionalData
    })
   } catch(error) {
    console.log('error creating user. ', error.message);
   }
  }
  return userRef; //return the reference to the document in the db
}

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: "select_account"});
export const signInWithGoogle = () => auth.signInWithPopup(provider)
export const signInWithGoogleRedirect = () => auth.signInWithRedirect(provider)