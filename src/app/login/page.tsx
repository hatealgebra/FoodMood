import React from "react";

import undrawCooking from "~assets/images/undraw/undraw_cooking.svg";
import FormHero from "~organisms/formHero/FormHero";

const LoginPage = () => {
  return <FormHero variant="login" imageSrc={undrawCooking} />;
};

export default LoginPage;
