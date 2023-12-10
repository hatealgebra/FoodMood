import React from "react";

import GenericPage from "../templates/genericPage/GenericPage";
import SignupPage from "./signupPage/SignupPage";
import LoginPage from "./loginPage/LoginPage";

export const LoginFormPage = () => <LoginPage />;
export const SignupFormPage = () => <SignupPage />;

export default {
  component: GenericPage,
  title: "Pages/Form pages",
};
