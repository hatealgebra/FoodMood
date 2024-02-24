import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '../store';

import { searchRecipesThunk } from '../thunks/edamamRecipe.thunk';
import { IHit, SearchRecipes, SORT_RECIPES_BY } from 'util-types';
import { sortRecipesBy } from 'util-shared';

const initialState = {
  query: '',
  status: 'idle',
  recipesList: [],
  sort: 'default',
} as SearchRecipes;

export const searchedRecipesSlice = createSlice({
  name: 'searchedRecipes',
  initialState,
  reducers: {
    sortRecipes: (state, action: PayloadAction<SORT_RECIPES_BY>) => {
      console.log('hello');
      const sortedRecipes = sortRecipesBy(state.recipesList, action.payload);
      state.recipesList = sortedRecipes;
      state.sort = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(searchRecipesThunk.pending, (state) => {
      state.status = 'loading';
      state.error = undefined;
    });
    builder.addCase(
      searchRecipesThunk.fulfilled,
      (state, { payload: { query, hits } }) => {
        const recipesList = hits.map((data: IHit) => data.recipe);
        state.query = query;
        state.recipesList = recipesList;
        state.status = 'idle';
      }
    );
    builder.addCase(searchRecipesThunk.rejected, (state, { payload }) => {
      state.error = payload;
      state.status = 'idle';
    });
  },
});

export const selectSearchedRecipesQuery = (state: RootState) =>
  state.searchedRecipes.query;

export const selectSearchedRecipes = (state: RootState) =>
  state.searchedRecipes.recipesList;

export const selectSearchedRecipesSort = (state: RootState) =>
  state.searchedRecipes.sort;

export const selectSearchedRecipesStatus = (state: RootState) =>
  state.searchedRecipes.status;
export const selectSearchedRecipesError = (state: RootState) =>
  state.searchedRecipes.error;

export const { sortRecipes } = searchedRecipesSlice.actions;

export default searchedRecipesSlice.reducer;
