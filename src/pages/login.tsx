import { getAuth } from "firebase/auth";
import { navigate } from "gatsby";
import React from "react";

import undrawCooking from "../assets/images/undraw/undraw_cooking.svg";
import FormHero from "../components/organisms/formHero/FormHero";
import GenericPage from "../components/templates/genericPage/GenericPage";

// FIXME: Login form/image ratio
// FIXME: Form doesn't reset all the input fields, password input specifically

const LoginPage = () => {
  return getAuth().currentUser !== null ? (
    navigate("/app/home")
  ) : (
    <GenericPage>
      <FormHero variant="login" imageSrc={undrawCooking} />
    </GenericPage>
  );
};

export default LoginPage;
