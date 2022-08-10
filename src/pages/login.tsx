import React from "react";

import undrawCooking from "../assets/images/undraw/undraw_cooking.svg";
import FormHero from "../components/organisms/formHero/FormHero";
import GenericPage from "../components/templates/genericPage/GenericPage";

const LoginPage = () => {
  return (
    <GenericPage>
      <FormHero variant="login" imageSrc={undrawCooking} />
    </GenericPage>
  );
};

export default LoginPage;
