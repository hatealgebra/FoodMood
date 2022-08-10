import React from "react";

import undrawCupcake from "../assets/images/undraw/undraw_cupcake.svg";
import FormHero from "../components/organisms/formHero/FormHero";

import GenericPage from "../components/templates/genericPage/GenericPage";

const register = () => {
  return (
    <GenericPage>
      <FormHero variant="signup" imageSrc={undrawCupcake} />
    </GenericPage>
  );
};

export default register;
