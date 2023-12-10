import React from "react";

import GenericPage from "../../templates/genericPage/GenericPage";

import undrawCupcake from "../../../assets/images/undraw/undraw_cupcake.svg";
import FormHero from "../../organisms/formHero/FormHero";

const SignupPage = () => {
  return (
    <GenericPage>
      <FormHero variant="signup" imageSrc={undrawCupcake} />
    </GenericPage>
  );
};

export default SignupPage;
