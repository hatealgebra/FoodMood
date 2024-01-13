import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "~store/store";

import Recipe from "~types/recipe.types";
import { getTodaysDate } from "~utils.utils";

export type TFoodTime = "breakfast" | "lunch" | "dinner";
type TMealPlanRecipes = Record<TFoodTime, Recipe | {}>;

interface IMealPlanState {
  data: {
    date: string;
    currentMealPlan: TMealPlanRecipes;
    recipesPool: Record<string, TMealPlanRecipes>;
  };
  status: "loading" | "idle";
  error?: Error;
}

const initialState: IMealPlanState = {
  data: {
    date: getTodaysDate(),
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
  extraReducers: (builder) => {},
});

export const selectMealPlanDate = (state: RootState) =>
  state.mealPlan.data.date;
export const selectMealPlanCurrent = (state: RootState) =>
  state.mealPlan.data.currentMealPlan;
export const selectMealPlanPool = (state: RootState) => {
  state.mealPlan.data.recipesPool;
};
export const selectMealPlanStatus = (state: RootState) => state.mealPlan.status;
export const selectMealPlanError = (state: RootState) => state.mealPlan.error;

export default mealPlanSlice.reducer;
