import { deleteDoc, getDocs, setDoc } from 'firebase/firestore';
import { getRecipeRef, savedRecipesRef } from '../references';
import { IRecipe } from 'util-types';

//TODO: Add recipe typing
export const saveRecipeDB = async (uid: string, recipe) => {
  const { label } = recipe;
  await setDoc(getRecipeRef(uid, label), recipe);
};

export const readSavedRecipesDB = async (uid: string) => {
  const recipeDocs = await getDocs(savedRecipesRef(uid));
  const recipes = recipeDocs.docs.map((doc) => doc.data() as IRecipe);
  return recipes;
};

export const removeSavedRecipeDB = async (uid: string, label: string) => {
  await deleteDoc(getRecipeRef(uid, label));
};
