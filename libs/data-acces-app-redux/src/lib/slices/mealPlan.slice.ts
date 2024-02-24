import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import {
  addRecipePlanThunk,
  fetchSpecificPlan,
  removeRecipeThunk,
} from '../thunks/mealPlan.thunk';

import { IRecipe } from 'util-types';
import { getTodaysString } from 'util-shared';

export type TFoodTime = 'breakfast' | 'lunch' | 'dinner';
type TMealPlanRecipes = Record<TFoodTime, IRecipe | {}>;

interface IMealPlanState {
  data: {
    currentDate?: string;
    currentMealPlan: TMealPlanRecipes;
    recipesPool: Record<string, TMealPlanRecipes>;
  };
  status: 'loading' | 'idle';
  error?: Error;
}

const initialState: IMealPlanState = {
  data: {
    currentDate: getTodaysString(),
    currentMealPlan: {
      breakfast: {},
      lunch: {},
      dinner: {},
    },
    recipesPool: {},
  },
  status: 'idle',
  error: undefined,
};

export const mealPlanSlice = createSlice({
  name: 'mealPlan',
  initialState,
  reducers: {
    getFromRecipesPool: (state, { payload }) => {
      const { date } = payload;
      state.data.currentMealPlan = state.data.recipesPool[date];
      state.data.currentDate = date;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSpecificPlan.pending, (state) => {
      state.status = 'loading';
      state.error = undefined;
    });
    builder.addCase(fetchSpecificPlan.fulfilled, (state, { payload }) => {
      const { date, mealPlan } = payload;
      state.data.currentMealPlan = mealPlan;
      state.data.recipesPool[date] = mealPlan;
      state.data.currentDate = date;
      state.status = 'idle';
    });
    builder.addCase(fetchSpecificPlan.rejected, (state, { payload }) => {
      state.error = payload;
      state.status = 'idle';
    });
    builder.addCase(addRecipePlanThunk.pending, (state) => {
      state.status = 'loading';
      state.error = undefined;
    });
    builder.addCase(addRecipePlanThunk.fulfilled, (state, { payload }) => {
      const { date, mealType, recipe } = payload;
      if (!state.data.recipesPool[date]) {
        state.data.recipesPool = {
          [date]: {
            breakfast: {},
            lunch: {},
            dinner: {},
          },
        };
      }
      state.data.recipesPool[date][mealType] = recipe;
      state.data.currentMealPlan = state.data.recipesPool[date];
      state.status = 'idle';
    });
    builder.addCase(addRecipePlanThunk.rejected, (state, { payload }) => {
      state.error = payload;
      state.status = 'idle';
    });
    builder.addCase(removeRecipeThunk.pending, (state) => {
      state.status = 'loading';
      state.error = undefined;
    });
    builder.addCase(removeRecipeThunk.fulfilled, (state, { payload }) => {
      const { date, mealType } = payload as { date: string; mealType: string };
      state.data.recipesPool[date][mealType] = {};
      state.data.currentMealPlan[mealType] = {};
      state.status = 'idle';
    });
    builder.addCase(removeRecipeThunk.rejected, (state, { payload }) => {
      state.error = payload;
      state.status = 'idle';
    });
  },
});

export const selectMealPlanDate = (state: RootState) =>
  state.mealPlan.data.currentDate;
export const selectMealPlanCurrent = (state: RootState) =>
  state.mealPlan.data.currentMealPlan;
export const selectMealPlanPool = (state: RootState) => {
  state.mealPlan.data.recipesPool;
};
export const selectMealPlanStatus = (state: RootState) => state.mealPlan.status;
export const selectMealPlanError = (state: RootState) => state.mealPlan.error;

export default mealPlanSlice.reducer;
