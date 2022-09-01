import React from "react";

import ModalRecipe from "./ModalRecipe";

import { SetUserData } from "../../../helpers/storybook.helpers";
import { useAppDispatch } from "../../../store/hooks";
import { openModal } from "../../../store/slices/modalRecipe.slice";
import { fetchRecipes } from "../../../store/thunks/edamamRecipe.thunk";
import { useAppSelector } from "../../../store/hooks";
import { selectRandomRecipes } from "../../../store/slices/randomRecipes.slice";
import { Button } from "@chakra-ui/react";

// TODO Test modal recipe problem
// ! could not find react-redux context value; please ensure the component is wrapped in a <Provider>

const PumpkinRecipeModal = () => {
  const dispatch = useAppDispatch();
  const recipes = useAppSelector(selectRandomRecipes);
  dispatch(fetchRecipes("pizza"));

  return (
    <>
      <Button
        onClick={() => {
          dispatch(openModal(recipes[0]));
        }}
      >
        Open modal
      </Button>
      <ModalRecipe />
    </>
  );
};

export const RecipeModal = () => (
  <SetUserData>
    <PumpkinRecipeModal />
  </SetUserData>
);

export default {
  component: ModalRecipe,
  title: "Organisms/Modal Recipe",
  parameters: {
    storyshots: { disable: true },
  },
};
