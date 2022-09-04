import React from "react";
import { screen } from "@testing-library/react";

import { setupIsolatedComponent } from "../../../helpers/testing.helpers";

import TextField from "./Input";
import userEvent from "@testing-library/user-event";

describe("testing the input", () => {
  test("controlled input", async () => {
    setupIsolatedComponent(
      <TextField type="text" id="input" placeholder="Type something" />
    );
    const input = screen.getByRole("textbox");
    await userEvent.type(input, "Prague");
    expect(input).toHaveValue("Prague");
  });
});
