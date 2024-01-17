import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "~store/store";
import { fetchRecipes } from "~store/thunks/edamamRecipe.thunk";
import { FetchingRecipes } from "~types/async.types";

const initialState = {
  status: "idle",
  recipesList: [],
} as FetchingRecipes;

export const randomRecipesSlice = createSlice({
  name: "randomRecipes",
  initialState,
  reducers: { sortRandomRecipes: (state, action: PayloadAction<string>) => {} },
  extraReducers: (builder) => {
    builder.addCase(fetchRecipes.pending, (state) => {
      state.status = "loading";
      state.error = undefined;
    });
    builder.addCase(fetchRecipes.fulfilled, (state, { payload }) => {
      const recipesList = payload.map((data) => data!.recipe);
      state.recipesList = recipesList;
      state.status = "idle";
    });
    builder.addCase(fetchRecipes.rejected, (state, { payload }) => {
      state.error = payload;
      state.status = "idle";
    });
  },
});

export const { sortRandomRecipes } = randomRecipesSlice.actions;

export const selectRandomRecipes = (state: RootState) =>
  state.randomRecipes.recipesList;
export const selectRandomRecipesStatus = (state: RootState) =>
  state.randomRecipes.status;
export const selectRandomRecipesSort = (state: RootState) =>
  state.randomRecipes.sort;
export const selectRandomRecipesError = (state: RootState) =>
  state.randomRecipes.error;

export default randomRecipesSlice.reducer;
