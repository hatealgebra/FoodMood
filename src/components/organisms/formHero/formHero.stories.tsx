import React from "react";

import FormHero from "./FormHero";
import testUndraw from "../../../assets/images/undraw/test_undraw.svg";

export const FormForLogin = () => (
  <FormHero variant="login" imageSrc={testUndraw} />
);
export const FormForSignup = () => (
  <FormHero variant="signup" imageSrc={testUndraw} />
);

export default {
  component: FormHero,
  title: "Organisms/Login form",
};
