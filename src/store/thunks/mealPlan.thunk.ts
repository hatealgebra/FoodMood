import { createAsyncThunk } from "@reduxjs/toolkit";
import { getDoc, setDoc, updateDoc } from "firebase/firestore";
import { transform } from "next/dist/build/swc";
import {
  getMealPlanDateRef,
  getRecipeRef,
} from "~services/firebase/firestoreRefs.services";
import { getTodaysDate } from "~utils.utils";
import { SaveRecipeArgs } from "./firestoreCRUD.thunk";

interface AddRecipeMealPlan extends SaveRecipeArgs {
  date: string;
  mealType: string;
}

export const fetchTodaysPlan = createAsyncThunk<
  any,
  string,
  { rejectValue: any }
>("mealPlan/fetchToday", async (_, thunkApi) => {
  const todaysDate = getTodaysDate();
  try {
  } catch (e) {
    return thunkApi.rejectWithValue({});
  }
});

export const addRecipePlanThunk = createAsyncThunk<
  any,
  AddRecipeMealPlan,
  { rejectValue: Error }
>("CRUD/saveRecipe", async ({ uid, date, mealType, recipe }, thunkApi) => {
  try {
    const recipeRef = getRecipeRef(uid, recipe.label);
    const targetRef = getMealPlanDateRef(uid, date);

    await setDoc(targetRef, { [mealType]: recipeRef });

    return { date, mealType, recipe };
  } catch (e) {
    console.log(e);
    return thunkApi.rejectWithValue({
      name: "Recipe was not saved",
      message:
        "There was an error when saving the recipe. Maybe the recipe is incorrect or already saved.",
    });
  }
});
