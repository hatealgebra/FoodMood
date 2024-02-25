import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  readSavedRecipesDB,
  removeSavedRecipeDB,
  saveRecipeDB,
} from 'data-access-firebase';

import { IRecipe } from 'util-types';

// READ operations
export const readSavedRecipes = createAsyncThunk<
  IRecipe[],
  string,
  { rejectValue: Error }
>('CRUD/read realtime', async (uid, thunkApi) => {
  try {
    const savedRecipes = await readSavedRecipesDB(uid);
    return savedRecipes;
  } catch (e) {
    return thunkApi.rejectWithValue({
      name: "Cant't reach saved recipes",
      message:
        'Something went wrong and we cannot now show your saved recipes. If problem persist, please contact admin.',
    });
  }
});

export interface SaveRecipeArgs {
  uid: string | null;
  recipe: IRecipe;
}

// CREATE operations
export const saveRecipe = createAsyncThunk<
  any,
  SaveRecipeArgs,
  { rejectValue: Error }
>('CRUD/saveRecipe', async ({ uid, recipe }, thunkApi) => {
  try {
    await saveRecipeDB(uid!, recipe);
    return recipe;
  } catch (e) {
    return thunkApi.rejectWithValue({
      name: 'Recipe was not saved',
      message:
        'There was an error when saving the recipe. Maybe the recipe is incorrect or already saved.',
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
  'CRUD/remove recipe',
  async ({ uid, label }: RemoveSavedRecipesArgs, thunkApi) => {
    try {
      await removeSavedRecipeDB(uid, label);
      return label;
    } catch (e) {
      return thunkApi.rejectWithValue({
        name: 'Cannot remove recipe',
        message:
          "Oops. Recipe couldn't be removed. Check if it is in the saved recipes, otherwise contact admin.",
      });
    }
  },
);
