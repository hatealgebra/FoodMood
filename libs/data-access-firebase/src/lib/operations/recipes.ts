import { deleteDoc, setDoc } from 'firebase/firestore';
import { getRecipeRef } from '../references';

//TODO: Add recipe typing
export const saveRecipe = async (uid: string, recipe) => {
  const { label } = recipe;
  await setDoc(getRecipeRef(uid, label), recipe);
};

export const removeSavedRecipe = async (uid: string, label: string) => {
  await deleteDoc(getRecipeRef(uid, label));
};
