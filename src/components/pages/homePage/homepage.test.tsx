import React from "react";

import { screen } from "@testing-library/react";

import { renderComponent } from "../../../utils/helpers/testing.helpers";
import Homepage from "./Homepage";

beforeEach(() => renderComponent(<Homepage />));

describe("Homepage ", () => {
  test("creates padding", () => {
    const headingOne = screen.getByRole("heading", {
      name: /let's start cooking with popular recipes/i,
    });
    expect(headingOne).toBeTruthy();
  });
});
