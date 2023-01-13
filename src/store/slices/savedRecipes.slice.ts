import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FetchingRecipes, ISavedRecipes } from "../../types/async.types";
import { SortByOptions } from "../../types/utils.types";
import { sortRecipesBy } from "../../utils/utils";

import type { RootState } from "../store";
import { readSavedRecipes, saveRecipe } from "../thunks/firestoreCRUD.thunk";

const initialState = {
  status: "idle",
  recipesData: [],
  sort: "default",
} as ISavedRecipes;

export const savedRecipesSlice = createSlice({
  name: "savedRecipes",
  initialState,
  reducers: {
    sortRecipes: (state, action: PayloadAction<SortByOptions>) => {
      const sortedRecipes = sortRecipesBy(state.recipesData, action.payload);
      state.recipesData = sortedRecipes;
      state.sort = action.payload;
    },
    emptySavedRecipes: (state) => {
      state.recipesData = [];
      state.status = "idle";
      state.error = undefined;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(readSavedRecipes.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(readSavedRecipes.fulfilled, (state, { payload }) => {
      console.log(payload);
      state.status = "idle";
      state.recipesData = payload;
    });
    builder.addCase(readSavedRecipes.rejected, (state, { payload }) => {
      state.status = "idle";
      state.error = payload;
    });
    builder.addCase(saveRecipe.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(saveRecipe.fulfilled, (state, { payload }) => {
      state.status = "idle";
      state.recipesData.push(payload);
    });
    builder.addCase(saveRecipe.rejected, (state, { payload }) => {
      state.status = "idle";
      state.error = payload;
    });
  },
});

export const selectSavedRecipes = (state: RootState) =>
  state.savedRecipes.recipesData;

export const selectSavedRecipesStatus = (state: RootState) =>
  state.savedRecipes.status;

export const selectSavedRecipesError = (state: RootState) =>
  state.savedRecipes.error;

export default savedRecipesSlice.reducer;
