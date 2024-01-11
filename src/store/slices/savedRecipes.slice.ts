import { createSlice, PayloadAction, current } from "@reduxjs/toolkit";
import { FetchingRecipes } from "~types/async.types";
import { SortByOptions } from "~types/utils.types";

import { readSavedRecipes, saveRecipe } from "../thunks/firestoreCRUD.thunk";
import { sortRecipesBy } from "~utils.utils";
import { RootState } from "~store/store";

const initialState = {
  status: "idle",
  recipesList: [],
  sort: "default",
} as FetchingRecipes;

export const savedRecipesSlice = createSlice({
  name: "savedRecipes",
  initialState,
  reducers: {
    sortSavedRecipes: (state, action: PayloadAction<SortByOptions>) => {
      console.log(current(state.recipesList));
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
    });
    builder.addCase(saveRecipe.rejected, (state, { payload }) => {
      state.status = "idle";
      state.error = payload;
    });
  },
});

export const { sortSavedRecipes, emptySavedRecipes } =
  savedRecipesSlice.actions;

export const selectSavedRecipes = (state: RootState) =>
  state.savedRecipes.recipesList;

export const selectSavedRecipesStatus = (state: RootState) =>
  state.savedRecipes.status;

export const selectSavedRecipesError = (state: RootState) =>
  state.savedRecipes.error;

export default savedRecipesSlice.reducer;
