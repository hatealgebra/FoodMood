import { createAsyncThunk } from '@reduxjs/toolkit';
import { getDoc, setDoc, updateDoc } from 'firebase/firestore';

import { SaveRecipeArgs } from './firestoreCRUD.thunk';
import { getAuth } from '@firebase/auth';
import { transformDateToString } from 'util-shared';
import { getMealPlanDateRef } from 'libs/data-access-firebase/src/lib/references';
import { RootState } from '../store';
import { addPlan, getPlanDB, removeRecipeFromPlan } from 'data-access-firebase';
import { TFoodTime } from 'util-types';

export const fetchSpecificPlan = createAsyncThunk<
  any,
  Date,
  { rejectValue: any }
>('mealPlan/fetchSpecificPlan', async (settedDate, thunkApi) => {
  const dateKey = transformDateToString(settedDate);
  const currenUser = getAuth().currentUser;

  if (!dateKey || !currenUser) {
    return thunkApi.rejectWithValue({});
  }

  try {
    const mealPlan = getPlanDB(currenUser.uid, dateKey);
    return mealPlan;
  } catch (e) {
    return thunkApi.rejectWithValue({});
  }
});

interface AddRecipeMealPlan extends Omit<SaveRecipeArgs, 'uid'> {
  mealType: TFoodTime;
}

export const addRecipePlanThunk = createAsyncThunk<
  any,
  AddRecipeMealPlan,
  { rejectValue: Error }
>('CRUD/saveRecipe', async ({ mealType, recipe }, thunkApi) => {
  const uid = getAuth().currentUser?.uid as string;
  const state = thunkApi.getState() as RootState;
  const { currentDate } = state.mealPlan.data;

  try {
    await addPlan(uid, currentDate!, mealType, recipe.label);

    return { date: currentDate, mealType, recipe };
  } catch (e) {
    console.log(e);
    return thunkApi.rejectWithValue({
      name: 'Recipe was not saved',
      message:
        'There was an error when saving the recipe. Maybe the recipe is incorrect or already saved.',
    });
  }
});

export const removeRecipeThunk = createAsyncThunk<
  any,
  TFoodTime,
  { rejectValue: Error }
>('CRUD/removeRecipe', async (mealType, thunkApi) => {
  const uid = getAuth().currentUser?.uid as string;
  const state = thunkApi.getState() as RootState;
  const currentDate = state.mealPlan.data.currentDate;

  try {
    await removeRecipeFromPlan(uid, currentDate!, mealType);

    return { date: currentDate, mealType };
  } catch (e) {
    console.log(e);
    return thunkApi.rejectWithValue({
      name: 'Recipe was not saved',
      message:
        'There was an error when saving the recipe. Maybe the recipe is incorrect or already saved.',
    });
  }
});
