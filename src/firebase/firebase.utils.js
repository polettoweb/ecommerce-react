import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyDJ4hnU5LZ7oEMA6anmXDfvWPnpKtFCrnw",
    authDomain: "ecommerce-react-645ae.firebaseapp.com",
    databaseURL: "https://ecommerce-react-645ae.firebaseio.com",
    projectId: "ecommerce-react-645ae",
    storageBucket: "ecommerce-react-645ae.appspot.com",
    messagingSenderId: "688879068239",
    appId: "1:688879068239:web:71127114eedd3ff10d763a",
    measurementId: "G-RHBGQLND2S"
}
  
firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;