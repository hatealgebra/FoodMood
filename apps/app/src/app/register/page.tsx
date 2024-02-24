import React from "react";

import undrawCupcake from "~assets/images/undraw/undraw_cupcake.svg";
import FormHero from "~organisms/formHero/FormHero";

const RegisterPage = () => {
  return <FormHero variant="signup" imageSrc={undrawCupcake} />;
};

export default RegisterPage;
