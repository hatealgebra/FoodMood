import React from "react";

import RecipeCardRow from "./RecipeCardRow";
import dailyRecipes from "../../../mocks/data/dailyRecipes.json";
import { recipeRowOrigin } from "../../../utils/firebase.utils";
import ModalRecipe from "../modalRecipe/ModalRecipe";

export const RecipesRow = () => {
  console.log(typeof dailyRecipes);
  const recipeData = dailyRecipes.hits.map((hit) => hit.recipe);

  return (
    <>
      <RecipeCardRow isLoading={false} recipes={recipeData} />
      <ModalRecipe />
    </>
  );
};

export const RecipesRowLoading = () => {
  return <RecipeCardRow isLoading={true} recipes={[]} />;
};

export const RecipesError = () => {
  const error = { name: "Error title", message: "Error message with details" };
  return <RecipeCardRow isLoading={false} recipes={[]} error={error} />;
};

export const NoRecipesRow = () => {
  return (
    <>
      <RecipeCardRow isLoading={false} recipes={[]} />
    </>
  );
};

export default {
  component: RecipeCardRow,
  title: "Organisms/Recipe Card Row",
  decorators: [
    (Story: any) => (
      <div style={{ padding: "2em 1em" }}>
        <Story />
      </div>
    ),
  ],
};
