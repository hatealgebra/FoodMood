import React from "react";
import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { renderComponent } from "../../../helpers/testing.helpers";
import { PumpkinRecipe } from "./recipeCard.stories";
import store from "../../../store/store";

describe("correct rendering", () => {
  beforeEach(() => renderComponent(<PumpkinRecipe />));
  test("heading is correct", () => {
    expect(screen.getByText(/pumpkin soup/i)).toBeTruthy();
  });
  test("tags are correct", () => {
    const tags = screen.getAllByLabelText(/recipe-tag/i);
    expect(tags).toHaveLength(3);
  });
  test("correct time to prepare", () => {
    const time = screen.getByLabelText(/time-to-prepare/i);
    expect(time).toHaveTextContent(/80 min/i);
  });
});
