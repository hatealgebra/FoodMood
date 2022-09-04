import React from "react";
import { screen } from "@testing-library/react";

import { renderComponent } from "../../../helpers/testing.helpers";

import {
  NoRecipesRow,
  RecipesRow,
  RecipesRowLoading,
} from "./recipeCardRow.stories";

describe("set of correct rendering", () => {
  test("All elements have correct classname", () => {
    renderComponent(<RecipesRow />);
    const recipeCards = screen.getAllByLabelText("recipe-card");
    recipeCards.map((recipe) => expect(recipe).toHaveClass("recipe-card"));
  });

  test("Data are loading", () => {
    renderComponent(<RecipesRowLoading />);
    const loadingSkeletons = screen.getAllByLabelText("loading-recipe-card");
    expect(loadingSkeletons).toHaveLength(20);
  });
  test("20 cards when loading", () => {
    renderComponent(<RecipesRow />);
    const recipesCards = screen.getAllByLabelText("recipe-card");
    expect(recipesCards).toHaveLength(20);
  });
  test("No data avalaible", () => {
    renderComponent(<NoRecipesRow />);
    const msg = screen.getByText(/No saved recipes yet/i);
    expect(msg).toBeTruthy();
  });
});
