import { createAsyncThunk } from "@reduxjs/toolkit";
import { deleteDoc, DocumentData, setDoc } from "firebase/firestore";

import { recipeRef } from "../../helpers/firestore.helpers";
import { showSuccess } from "../../helpers/message.helpers";

import Recipe from "../../types/recipe.types";

// CREATE operations
// export const saveReci;

// READ operations
export const readSavedRecipes = createAsyncThunk<
  Recipe[],
  DocumentData[],
  { rejectValue: Error }
>("CRUD/read realtime", (recipes, thunkApi) => {
  try {
    return recipes as Recipe[];
  } catch (e) {
    return thunkApi.rejectWithValue({
      name: "Cant't reach saved recipes",
      message:
        "Something went wrong and we cannot now show your saved recipes. If problem persist, please contact admin.",
    });
  }
});

interface SaveRecipeArgs {
  uid: string | null;
  recipe: Recipe;
}

// CREATE operations
export const saveRecipe = createAsyncThunk<
  boolean,
  SaveRecipeArgs,
  { rejectValue: Error }
>("CRUD/save recipe", async ({ uid, recipe }, thunkApi) => {
  const { label } = recipe;
  try {
    uid && (await setDoc(recipeRef(uid, label), recipe));
    return showSuccess("Recipe saved", `The ${label} was saved succesfully.`);
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
      await deleteDoc(recipeRef(uid, label));
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
