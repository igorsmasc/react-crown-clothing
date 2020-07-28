import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDqahYfdvumSoHpAOj18fcCW81CJ3h1C-0",
  authDomain: "malena-db.firebaseapp.com",
  databaseURL: "https://malena-db.firebaseio.com",
  projectId: "malena-db",
  storageBucket: "malena-db.appspot.com",
  messagingSenderId: "148788078393",
  appId: "1:148788078393:web:edc5aefd7860c68164eae8",
  measurementId: "G-XQ6XSS2ZCS",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
