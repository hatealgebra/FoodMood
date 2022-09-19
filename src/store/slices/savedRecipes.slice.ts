import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FetchingRecipes } from "../../types/async.types";
import { SortByOptions } from "../../types/utils.types";
import { sortRecipesBy } from "../../utils/utils";

import type { RootState } from "../store";
import { readSavedRecipes, saveRecipe } from "../thunks/firestoreCRUD.thunk";

const initialState = {
  status: "idle",
  recipesList: [],
  sort: "default",
} as FetchingRecipes;

export const savedRecipesSlice = createSlice({
  name: "savedRecipes",
  initialState,
  reducers: {
    sortRecipes: (state, action: PayloadAction<SortByOptions>) => {
      const sortedRecipes = sortRecipesBy(state.recipesList, action.payload);
      state.recipesList = sortedRecipes;
      state.sort = action.payload;
    },
    emptySavedRecipes: (state) => {
      state.recipesList = [];
      state.status = "idle";
      state.error = undefined;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(readSavedRecipes.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(readSavedRecipes.fulfilled, (state, { payload }) => {
      state.status = "idle";
      state.recipesList = payload;
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
      state.recipesList.push(payload);
    });
    builder.addCase(saveRecipe.rejected, (state, { payload }) => {
      state.status = "idle";
      state.error = payload;
    });
  },
});

export const selectSavedRecipes = (state: RootState) =>
  state.savedRecipes.recipesList;

export const selectSavedRecipesStatus = (state: RootState) =>
  state.savedRecipes.status;

export const selectSavedRecipesError = (state: RootState) =>
  state.savedRecipes.error;

export default savedRecipesSlice.reducer;
