import React from "react";
import {
  screen,
  waitForElementToBeRemoved,
  waitFor,
} from "@testing-library/react";

import { renderComponent } from "../../../utils/helpers/testing.helpers";

import {
  NoRecipesRow,
  RecipesRow,
  RecipesRowLoading,
} from "./recipeCardRow.stories";
import userEvent from "@testing-library/user-event";

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
    const msg = screen.getByText(/No saved recipes yet/gi);
    expect(msg).toBeTruthy();
  });
});

describe("other rendering", () => {
  test("Close/Open modal", async () => {
    renderComponent(<RecipesRow />);
    const recipeCards = screen.getAllByLabelText("recipe-card");
    userEvent.click(recipeCards[0]);
    const modalRecipe = await screen.findByRole("dialog");
    const closeBtn = await screen.findByRole("button", { name: "Close" });
    await waitFor(() => expect(modalRecipe).toBeTruthy());
    userEvent.click(closeBtn);
    await waitForElementToBeRemoved(modalRecipe);
    expect(modalRecipe).not.toBeInTheDocument();
  }, 10000);
});
