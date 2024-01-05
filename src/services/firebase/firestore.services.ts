import { deleteField, doc, updateDoc } from "firebase/firestore";
import { dbFirestore } from "./config";

export const deleteAllRecipes = async (uid: string) => {
  const recipesRef = doc(dbFirestore, "users", uid);
  try {
    await updateDoc(recipesRef, {
      recipes: deleteField(),
    });
    await updateDoc(recipesRef, {
      recipes: [],
    });
  } catch (e) {}
};
