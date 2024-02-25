import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import searchedRecipesReducer from './slices/searchedRecipesSlice';
import modalRecipeReducer from './slices/modalRecipe.slice';
import userDataReducer from './slices/user.slice';
import randomRecipesReducer from './slices/randomRecipes.slice';
import savedRecipesReducer from './slices/savedRecipes.slice';
import mealPlanReducer from './slices/mealPlan.slice';

export const reducer = combineReducers({
  searchedRecipes: searchedRecipesReducer,
  randomRecipes: randomRecipesReducer,
  modalRecipe: modalRecipeReducer,
  user: userDataReducer,
  savedRecipes: savedRecipesReducer,
  mealPlan: mealPlanReducer,
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
