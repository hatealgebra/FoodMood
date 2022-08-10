import { collection, doc } from "firebase/firestore";
import { dbFirestore } from "../../services/firebase/configFirebase";

export const userRef = (uid: string) => doc(dbFirestore, "users", uid);

export const savedRecipesRef = (uid: string) =>
  collection(dbFirestore, "users", uid, "recipes");

export const recipeRef = (uid: string, label: string) =>
  doc(dbFirestore, "users", uid, "recipes", label);
