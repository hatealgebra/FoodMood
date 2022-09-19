import React from "react";
import userEvent from "@testing-library/user-event";

import { renderComponent } from "../../../helpers/testing.helpers";
import LoginForm from "./LoginForm";
import { screen, waitFor } from "@testing-library/react";
import SignupForm from "./SignupForm";

const inputMock = [
  "Forename Surname",
  "username@nfoodmoood.com",
  "Password1",
  "Password1",
];

// FIXME mock firebase needed

describe("Login form functionality", () => {
  test("on submit", () => {
    const onSubmit = jest.fn();

    const { getByRole, getByLabelText } = renderComponent(
      <LoginForm onSubmit={onSubmit()} />
    );
    const emailInput = getByRole("textbox");
    const psw = getByLabelText("password");
    userEvent.type(emailInput, inputMock[1]);
    userEvent.type(psw, inputMock[2]);
    const loginButton = getByRole("button", { name: /login/i });
    userEvent.click(loginButton);
    expect(onSubmit).toBeCalled();
  });
});

describe("signup functionality", () => {
  test("clicking the button triggers submit event", () => {
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
    expect(onSubmit).toBeCalled;
  });
});
