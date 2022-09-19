import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FetchingRecipes, RandomRecipes } from "../../types/async.types";
import { RootObjectEdamam } from "../../types/recipe.types";
import { RootState } from "../store";
import {
  getRandomRecipes,
  showMoreRecipes,
} from "../thunks/edamamRecipe.thunk";

const initialState = {
  recipesData: [],
  error: undefined,
  sort: "default",
} as RandomRecipes;

export const randomRecipesSlice = createSlice({
  name: "randomRecipes",
  initialState,
  reducers: { sortRandomRecipes: (state, action: PayloadAction<string>) => {} },
  extraReducers: (builder) => {
    builder.addCase(getRandomRecipes.pending, (state, { payload }) => {
      if (state.recipesData.length === 0) {
        state.recipesData.push({
          status: "loading",
          data: {} as RootObjectEdamam,
          error: undefined,
        });
      }
    });
    builder.addCase(getRandomRecipes.fulfilled, (state, { payload }) => {
      state.recipesData[0].data = payload;
      state.recipesData[0].status = "idle";
    });
    builder.addCase(getRandomRecipes.rejected, (state, { payload }) => {
      state.error = payload;
      state.recipesData[0].status = "idle";
    });
    builder.addCase(showMoreRecipes.pending, (state, { payload }) => {
      state.recipesData.push({
        status: "loading",
        data: {} as RootObjectEdamam,
        error: undefined,
      });
      console.log(state.recipesData);
    });
    builder.addCase(showMoreRecipes.fulfilled, (state, { payload }) => {
      const nextIndex = state.recipesData.length - 1;
      state.recipesData[nextIndex].data = payload;
      state.recipesData[nextIndex].status = "idle";
    });
    builder.addCase(showMoreRecipes.rejected, (state, { payload }) => {
      const nextIndex = state.recipesData.length;
      state.recipesData[nextIndex].status = "idle";
    });
  },
});

export const { sortRandomRecipes } = randomRecipesSlice.actions;

export const selectRandomRecipes = (state: RootState) =>
  state.randomRecipes.recipesData;
export const selectRandomRecipesSort = (state: RootState) =>
  state.randomRecipes.sort;

export default randomRecipesSlice.reducer;
