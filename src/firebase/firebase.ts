import { initializeApp } from 'firebase/app';
import { getAuth, connectAuthEmulator } from 'firebase/auth';
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';
import axios from 'axios';
import '@firebase/functions';

const firebase: any = axios
    .get('/__/firebase/init.json')
    .then(async (response) => {
        return initializeApp(await response.data, 'mainapp');
    });

if (window.location.hostname === 'localhost') {
    firebase.firestore().useEmulator('localhost', 8080);
    firebase.functions().useEmulator('localhost', 5001);
}
export const GoogleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const FirebaseAuth = firebase.auth();
export const Firestore = firebase.firestore();
export const FirebaseFunctions = firebase.functions();
export const FirebaseStorage = firebase.storage();

const db = getFirestore();
const auth = getAuth();

// If on localhost, use all firebase services locally
if (location.hostname === 'localhost') {
    connectFirestoreEmulator(db, 'localhost', 8080);
    connectAuthEmulator(auth, 'http://localhost:9099');
    // add more services as described in the docs: https://firebase.google.com/docs/emulator-suite/connect_firestore
}

export default firebase;
