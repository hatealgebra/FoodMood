import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { connectFirestoreEmulator } from "@firebase/firestore";
import { connectStorageEmulator, getStorage } from "firebase/storage";

export const firebaseConfig = {
  apiKey: "AIzaSyAscHD8Zm55ihNcjlLe6jcnQJ6XbUyAplw",
  authDomain: "food-mood-a535d.firebaseapp.com",
  projectId: "food-mood-a535d",
  storageBucket: "food-mood-a535d.appspot.com",
  messagingSenderId: "969736149399",
  appId: "1:969736149399:web:5f5d66f84c7bdaf1df4cd2",
  measurementId: "G-1JYYNKCP6V",
  databaseURL:
    "https://food-mood-a535d-default-rtdb.europe-west1.firebasedatabase.app/",
};

const fbApp = initializeApp(firebaseConfig);

export const dbFirestore = getFirestore(fbApp);
export const storage = getStorage(fbApp);

if (typeof window !== "undefined") {
  if (window.location.hostname.includes("localhost")) {
    connectAuthEmulator(getAuth(), "http://localhost:9099", {
      disableWarnings: true,
    });
    connectFirestoreEmulator(dbFirestore, "localhost", 8080);
    connectStorageEmulator(storage, "localhost", 9199);
  }
}

export default fbApp;
