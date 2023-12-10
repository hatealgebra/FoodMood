import React from "react";

import { screen } from "@testing-library/react";
import { renderComponent } from "../../../utils/helpers/testing.helpers";
import LoginPage from "./LoginPage";

describe("Testing rendering", () => {
  test("Correct heading", () => {
    renderComponent(<LoginPage />);
    const heading = screen.getByRole("heading", { name: "Login" });
    expect(heading).toBeTruthy();
  });
});
