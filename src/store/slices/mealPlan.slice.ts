import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "~store/store";
import { addRecipePlanThunk } from "~store/thunks/mealPlan.thunk";

import Recipe from "~types/recipe.types";
import { getTodaysDate } from "~utils.utils";

export type TFoodTime = "breakfast" | "lunch" | "dinner";
type TMealPlanRecipes = Record<TFoodTime, Recipe | {}>;

interface IMealPlanState {
  data: {
    currentDate: string;
    currentMealPlan: TMealPlanRecipes;
    recipesPool: Record<string, TMealPlanRecipes>;
  };
  status: "loading" | "idle";
  error?: Error;
}

const initialState: IMealPlanState = {
  data: {
    currentDate: getTodaysDate(),
    currentMealPlan: {
      breakfast: {},
      lunch: {},
      dinner: {},
    },
    recipesPool: {},
  },
  status: "idle",
  error: undefined,
};

export const mealPlanSlice = createSlice({
  name: "mealPlan",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addRecipePlanThunk.pending, (state) => {
      state.status = "loading";
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
      state.status = "idle";
    });
    builder.addCase(addRecipePlanThunk.rejected, (state, { payload }) => {
      state.error = payload;
      state.status = "idle";
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
