import React from "react";

import userEvent from "@testing-library/user-event";
import { renderComponent } from "../../../utils/helpers/testing.helpers";

import { FormForLogin, FormForSignup } from "./formHero.stories";
import LoginForm from "../../molecules/forms/LoginForm";
import SignupForm from "../../molecules/forms/SignupForm";

import testUndraw from "../../../assets/images/undraw/test_undraw.svg";
import { screen, waitFor } from "@testing-library/react";

describe("Login form", () => {
  beforeEach(() => renderComponent(<FormForLogin />));

  test("Image rendering", () => {
    const imageLogin = screen.getByAltText(testUndraw);
    expect(imageLogin).toBeTruthy();
  });
  test("Shows login content", () => {
    const loginHeading = screen.getByRole("heading", { name: /login/i });
    expect(loginHeading).toBeTruthy();
  });
  test("Login inputs", () => {
    const loginBtn = screen.getByRole("button", { name: /login/i });
    expect(loginBtn).toHaveTextContent(/login/i);
  });
});

describe("Test signup form", () => {
  beforeEach(() => renderComponent(<FormForSignup />));

  test("Shows signup content", () => {
    const signupHeading = screen.getByRole("heading", { name: /sign up/i });
    expect(signupHeading).toBeTruthy();
  });
  test("Signup inputs", () => {
    const signupBtn = screen.getByRole("button", { name: /sign up/i });
    expect(signupBtn).toHaveTextContent(/sign up/i);
  });
});

describe("Form submit", () => {
  test("login submitting", async () => {
    const mockSubmit = jest.fn();
    renderComponent(<LoginForm onSubmit={mockSubmit} />);
    const loginBtn = screen.getByRole("button", { name: /login/i });
    userEvent.click(loginBtn);
    await waitFor(() => expect(mockSubmit).toHaveBeenCalled());
  });

  test("Sign Up submitting", async () => {
    const mockSubmit = jest.fn();
    renderComponent(<SignupForm onSubmit={mockSubmit} />);
    const fullName = screen.getByLabelText(/name/i);
    const email = screen.getByLabelText(/email/i);
    const signUpBtn = screen.getByRole("button", { name: /sign up/i });
    const password = screen.getByLabelText("password");
    const passwordAgain = screen.getByLabelText("passwordAgain");
    userEvent.type(fullName, "Pavel Vondra");
    userEvent.type(email, "email@email.com");
    userEvent.type(password, "Password66");
    userEvent.type(passwordAgain, "Password66");
    userEvent.click(signUpBtn);
    await waitFor(() => expect(mockSubmit).toHaveBeenCalled());
  });
});
