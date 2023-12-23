import React from "react";

import GenericPage from "~templates/genericPage/GenericPage";
import SignupPage from "~app/register/page";
import LoginPage from "~app/login/page";

export const LoginFormPage = () => <LoginPage />;
export const SignupFormPage = () => <SignupPage />;

export default {
  component: GenericPage,
  title: "Pages/Form pages",
};
