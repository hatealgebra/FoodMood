import React from "react";
import userEvent from "@testing-library/user-event";

import { renderComponent } from "../../../utils/helpers/testing.helpers";
import LoginForm from "./LoginForm";
import { screen, waitFor } from "@testing-library/react";
import SignupForm from "./SignupForm";

const inputMock = [
  "Forename Surname",
  "username@nfoodmoood.com",
  "Password1",
  "Password1",
];

describe("Login form functionality", () => {
  test("on submit", async () => {
    const onSubmit = jest.fn();
    renderComponent(<LoginForm onSubmit={onSubmit} />);
    const loginButton = screen.getByRole("button", { name: /login/i });
    userEvent.click(loginButton);
    await waitFor(() => expect(onSubmit).toHaveBeenCalled());
  });
});

describe("signup functionality", () => {
  test("clicking the button triggers submit event", async () => {
    const onSubmit = jest.fn();
    renderComponent(<SignupForm onSubmit={onSubmit} />);
    const signupButton = screen.getByRole("button", { name: /sign up/i });
    const inputs = screen.getAllByRole("textbox");
    const psw = screen.getByLabelText("password");
    const pswAgain = screen.getByLabelText("passwordAgain");
    inputs.map((input, i) => userEvent.type(input, inputMock[i]));
    userEvent.type(psw, inputMock[2]);
    userEvent.type(pswAgain, inputMock[3]);
    userEvent.click(signupButton);
    await waitFor(() => expect(onSubmit).toHaveBeenCalled());
  });
});
