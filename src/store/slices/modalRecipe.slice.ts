import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "~store/store";

import Recipe from "~types/recipe.types";

const initialState: InitialStateProps = {
  isOpen: false,
  recipeData: null,
};

export const modalRecipesSlice = createSlice({
  name: "modalRecipe",
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<Recipe>) =>
      (state = { isOpen: true, recipeData: action.payload }),
    closeModal: (state) => (state = { isOpen: false, recipeData: null }),
  },
});

interface InitialStateProps {
  isOpen: boolean;
  recipeData: Recipe | null;
}

export const { openModal, closeModal } = modalRecipesSlice.actions;

export const selectModalOpen = (state: RootState) => state.modalRecipe.isOpen;
export const selectModalData = (state: RootState) =>
  state.modalRecipe.recipeData;

export default modalRecipesSlice.reducer;
