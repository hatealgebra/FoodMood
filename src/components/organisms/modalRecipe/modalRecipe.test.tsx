import React from "react";
import * as redux from "react-redux";

import { renderComponent } from "../../../utils/helpers/testing.helpers";
import {
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import ModalRecipe from "./ModalRecipe";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { fetchRecipes } from "../../../store/thunks/edamamRecipe.thunk";
import { Button } from "@chakra-ui/react";
import { openModal } from "../../../store/slices/modalRecipe.slice";
import { selectRandomRecipes } from "../../../store/slices/randomRecipes.slice";
import userEvent from "@testing-library/user-event";

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

describe("modal recipe interactions", () => {
  let modal: HTMLElement;
  beforeEach(() => {
    renderComponent(<PumpkinRecipeModal />);
    const button = screen.getByRole("button", { name: /open modal/i });
    userEvent.click(button);
    modal = screen.getByLabelText("modal-recipe");
  });
  test("Open modal", async () => {
    await waitFor(() => expect(modal).toBeInTheDocument());
  });
  test("Close modal", async () => {
    const closeBtn = screen.getByRole("button", { name: /Close/ });
    userEvent.click(closeBtn);
    await waitForElementToBeRemoved(modal);
    expect(modal).not.toBeInTheDocument();
  });
  test("Close modal with icon button", async () => {
    const closeBtn = screen.getByLabelText("close-modal");
    userEvent.click(closeBtn);
    await waitForElementToBeRemoved(modal);
    expect(modal).not.toBeInTheDocument();
  });
});

//  ? How to mock dispatch actions bruh?
describe("Save button interactions", () => {
  beforeEach(() => {
    renderComponent(<PumpkinRecipeModal />);
    const button = screen.getByRole("button", { name: /open modal/i });
    userEvent.click(button);
    const saveBtn = screen.getByRole("button", { name: /save/i });
    userEvent.click(saveBtn);
  });

  // ? How to mock recipes method
  test("Save recipe", async () => {
    const undoBtn = await screen.findByLabelText(/saved/i);
    await waitFor(() => expect(undoBtn).toBeInTheDocument());
  });
});
