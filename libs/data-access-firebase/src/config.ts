// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { connectFirestoreEmulator, getFirestore } from 'firebase/firestore';
import { getAuth, connectAuthEmulator } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const firebase_app = initializeApp(firebaseConfig);
export const dbFirestore = getFirestore(firebase_app);

// Initialize emulators
const db = getFirestore();
connectFirestoreEmulator(db, '127.0.0.1', 8080);

const auth = getAuth();
connectAuthEmulator(auth, 'http://127.0.0.1:9099');

export default firebase_app;
