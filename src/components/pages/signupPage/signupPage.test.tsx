import { screen } from "@testing-library/react";
import React from "react";
import { renderComponent } from "../../../utils/helpers/testing.helpers";
import SignupPage from "./SignupPage";

describe("Signup page rendering", () => {
  test("correct heading", () => {
    renderComponent(<SignupPage />);
    const heading = screen.getByRole("heading", { name: /sign up/i });
    expect(heading).toBeTruthy();
  });
});
