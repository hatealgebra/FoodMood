import React from "react";

import FormHero from "../../organisms/formHero/FormHero";
import GenericPage from "../../templates/genericPage/GenericPage";
import undrawCooking from "../../../assets/images/undraw/undraw_cooking.svg";

const LoginPage = () => {
  return (
    <GenericPage>
      <FormHero variant="login" imageSrc={undrawCooking} />
    </GenericPage>
  );
};

export default LoginPage;
