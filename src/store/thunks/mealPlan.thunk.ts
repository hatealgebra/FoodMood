import { createAsyncThunk } from "@reduxjs/toolkit";
import { getDoc, setDoc, updateDoc } from "firebase/firestore";
import {
  getMealPlanDateRef,
  getRecipeRef,
} from "~services/firebase/firestoreRefs.services";
import { transformDateToString } from "~utils.utils";
import { SaveRecipeArgs } from "./firestoreCRUD.thunk";
import { getAuth } from "@firebase/auth";
import mapValues from "lodash/mapValues";

interface AddRecipeMealPlan extends SaveRecipeArgs {
  date: string;
  mealType: string;
}

export const addRecipePlanThunk = createAsyncThunk<
  any,
  AddRecipeMealPlan,
  { rejectValue: Error }
>("CRUD/saveRecipe", async ({ uid, date, mealType, recipe }, thunkApi) => {
  try {
    const recipeRef = getRecipeRef(uid, recipe.label);
    const targetRef = getMealPlanDateRef(uid, date);

    if (!recipeRef) {
      return thunkApi.rejectWithValue({});
    }

    if (!(await getDoc(targetRef)).data()) {
      await setDoc(targetRef, { breakfast: {}, lunch: {}, dinner: {} });
    }

    await updateDoc(targetRef, { [mealType]: recipeRef });

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

export const fetchSpecificPlan = createAsyncThunk<
  any,
  Date,
  { rejectValue: any }
>("mealPlan/fetchSpecificPlan", async (settedDate, thunkApi) => {
  const dateKey = transformDateToString(settedDate);
  const currenUser = getAuth().currentUser;

  if (!dateKey || !currenUser) {
    return thunkApi.rejectWithValue({});
  }

  // check if the meal plan is already in the pool (redux store)
  const curentReduxState = thunkApi.getState() as any;
  const availInPool = curentReduxState.mealPlan.data.recipesPool[dateKey];

  if (availInPool) {
    return {
      dateKey,
      mealPlan: availInPool,
    };
  }

  try {
    const mealPlanRef = getMealPlanDateRef(currenUser.uid, dateKey);
    const mealPlanData = (await getDoc(mealPlanRef)).data();
    if (!mealPlanData) {
      return {
        date: dateKey,
        mealPlan: {
          breakfast: {},
          lunch: {},
          dinner: {},
        },
      };
    }

    const resolvedMealPlanRefs = mapValues(mealPlanData, async (value) => {
      if (!Object.keys(value).length) {
        return {};
      }
      const recipeData = (await getDoc(value)).data();
      return recipeData;
    });

    return {
      date: dateKey,
      mealPlan: {
        breakfast: await resolvedMealPlanRefs.breakfast,
        lunch: await resolvedMealPlanRefs.lunch,
        dinner: await resolvedMealPlanRefs.dinner,
      },
    };
  } catch (e) {
    return thunkApi.rejectWithValue({});
  }
});
