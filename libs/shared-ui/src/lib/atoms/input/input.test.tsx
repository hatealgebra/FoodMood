import React from "react";
import { screen } from "@testing-library/react";

import { renderComponent } from "../../../helpers/testing.helpers";

import TextField from "./Input";
import userEvent from "@testing-library/user-event";

describe("testing the input", () => {
  test("controlled input", () => {
    renderComponent(
      <TextField type="text" id="input" placeholder="Type something" />
    );
    const input = screen.getByRole("textbox");
    userEvent.type(input, "Prague");
    expect(input).toHaveValue("Prague");
  });
});
