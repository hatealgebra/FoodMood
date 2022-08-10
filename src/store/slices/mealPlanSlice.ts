import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

import mockRecipe from "../../mocks/data/dailyRecipes.json";

const initialState: { date: Date; recipe: typeof mockRecipe }[] = [];

export const mealPlanSlice = createSlice({
  name: "mealPlan",
  initialState,
  reducers: {},
});
