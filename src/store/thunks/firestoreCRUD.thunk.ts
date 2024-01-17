import { User } from "@firebase/auth";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  deleteDoc,
  DocumentData,
  getDoc,
  getDocs,
  setDoc,
} from "firebase/firestore";

import {
  getRecipeRef,
  savedRecipesRef,
} from "~services/firebase/firestoreRefs.services";

import Recipe from "~types/recipe.types";

// CREATE operations
// export const saveReci;

// READ operations
export const readSavedRecipes = createAsyncThunk<
  Recipe[],
  string,
  { rejectValue: Error }
>("CRUD/read realtime", async (uid, thunkApi) => {
  try {
    const recipeDocs = await getDocs(savedRecipesRef(uid));
    return recipeDocs.docs.map((doc) => doc.data() as Recipe);
  } catch (e) {
    return thunkApi.rejectWithValue({
      name: "Cant't reach saved recipes",
      message:
        "Something went wrong and we cannot now show your saved recipes. If problem persist, please contact admin.",
    });
  }
});

export interface SaveRecipeArgs {
  uid: string | null;
  recipe: Recipe;
}

// CREATE operations
export const saveRecipe = createAsyncThunk<
  any,
  SaveRecipeArgs,
  { rejectValue: Error }
>("CRUD/saveRecipe", async ({ uid, recipe }, thunkApi) => {
  const { label } = recipe;
  try {
    uid && (await setDoc(getRecipeRef(uid, label), recipe));
    return recipe;
  } catch (e) {
    return thunkApi.rejectWithValue({
      name: "Recipe was not saved",
      message:
        "There was an error when saving the recipe. Maybe the recipe is incorrect or already saved.",
    });
  }
});

//DELETE operations

interface RemoveSavedRecipesArgs {
  uid: string;
  label: string;
}

export const removeSavedRecipe = createAsyncThunk<
  string,
  RemoveSavedRecipesArgs,
  { rejectValue: Error }
>(
  "CRUD/remove recipe",
  async ({ uid, label }: RemoveSavedRecipesArgs, thunkApi) => {
    try {
      await deleteDoc(getRecipeRef(uid, label));
      return label;
    } catch (e) {
      return thunkApi.rejectWithValue({
        name: "Cannot remove recipe",
        message:
          "Oops. Recipe couldn't be removed. Check if it is in the saved recipes, otherwise contact admin.",
      });
    }
  }
);
