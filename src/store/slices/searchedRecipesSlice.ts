import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { RootState } from "../store";

import {
  searchRecipes,
  showMoreSearchedRecipes,
} from "../thunks/edamamRecipe.thunk";
import { sortRecipesBy } from "../../utils/utils";
import { IRecipesSlice } from "../../types/async.types";
import { Hit, RootObjectEdamam } from "../../types/recipe.types";
import { SortByOptions } from "../../types/utils.types";

// FIXME: Figure out how to reuse same "frame" for multiple slices
// * This slice and randomRecipes slice are using same structure, consistency would be great

const initialState = {
  query: "",
  status: "idle",
  recipesData: [],
  showNextLink: undefined,
  error: undefined,
  sort: "default",
} as IRecipesSlice & { query?: string };

export const searchedRecipesSlice = createSlice({
  name: "searchedRecipes",
  initialState,
  reducers: {
    sortRecipes: (state, action: PayloadAction<SortByOptions>) => {
      const sortedRecipes = sortRecipesBy(state.recipesData, action.payload);
      state.recipesData = sortedRecipes;
      state.sort = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(searchRecipes.pending, (state, { payload }) => {
      state.recipesData = [];
      if (state.recipesData.length === 0) {
        state.recipesData.push({
          status: "loading",
          data: {} as RootObjectEdamam,
          error: undefined,
        });
      }
    });
    builder.addCase(
      searchRecipes.fulfilled,
      (state, { payload: { query, data } }) => {
        state.recipesData[0].data = data;
        state.showNextLink = data._links.next.href;
        state.recipesData[0].status = "idle";
        state.query = query;
      }
    );
    builder.addCase(searchRecipes.rejected, (state, { payload }) => {
      state.error = payload;
      state.recipesData[0].status = "idle";
    });
    builder.addCase(showMoreSearchedRecipes.pending, (state, { payload }) => {
      state.recipesData.push({
        status: "loading",
        data: {} as RootObjectEdamam,
        error: undefined,
      });
    });
    builder.addCase(showMoreSearchedRecipes.fulfilled, (state, { payload }) => {
      const { _links } = payload;
      const nextIndex = state.recipesData.length - 1;
      state.recipesData[nextIndex].data = payload;
      state.showNextLink = _links.next.href;
      state.recipesData[nextIndex].status = "idle";
    });
    builder.addCase(showMoreSearchedRecipes.rejected, (state, { payload }) => {
      const nextIndex = state.recipesData.length;
      state.recipesData[nextIndex].status = "idle";
    });
  },
});

export const selectSearchedRecipesQuery = (state: RootState) =>
  state.searchedRecipes.query;

export const selectSearchedRecipes = (state: RootState) =>
  state.searchedRecipes.recipesData;

export const selectSearchedRecipesSort = (state: RootState) =>
  state.searchedRecipes.sort;

export const selectSearchedRecipesStatus = (state: RootState) =>
  state.searchedRecipes.status;
export const selectSearchedRecipesError = (state: RootState) =>
  state.searchedRecipes.error;

export const selectSearchedRecipesShowNextLink = (state: RootState) =>
  state.searchedRecipes.showNextLink;

export const { sortRecipes } = searchedRecipesSlice.actions;

export default searchedRecipesSlice.reducer;
