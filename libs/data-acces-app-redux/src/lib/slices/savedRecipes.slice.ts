import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { readSavedRecipes, saveRecipe } from '../thunks/firestoreCRUD.thunk';
import { FetchingRecipes, SORT_RECIPES_BY } from 'util-types';
import { sortRecipesBy } from 'util-shared';
import { RootState } from '../store';

const initialState = {
  status: 'idle',
  recipesList: [],
  sort: 'default',
} as FetchingRecipes;

export const savedRecipesSlice = createSlice({
  name: 'savedRecipes',
  initialState,
  reducers: {
    sortSavedRecipes: (state, action: PayloadAction<SORT_RECIPES_BY>) => {
      const sortedRecipes = sortRecipesBy(state.recipesList, action.payload);
      state.recipesList = sortedRecipes;
      state.sort = action.payload;
    },
    emptySavedRecipes: (state) => {
      state.recipesList = [];
      state.status = 'idle';
      state.error = undefined;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(readSavedRecipes.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(readSavedRecipes.fulfilled, (state, { payload }) => {
      state.status = 'idle';
      state.recipesList = payload;
    });
    builder.addCase(readSavedRecipes.rejected, (state, { payload }) => {
      state.status = 'idle';
      state.error = payload;
    });
    builder.addCase(saveRecipe.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(saveRecipe.fulfilled, (state, { payload }) => {
      state.status = 'idle';
    });
    builder.addCase(saveRecipe.rejected, (state, { payload }) => {
      state.status = 'idle';
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
