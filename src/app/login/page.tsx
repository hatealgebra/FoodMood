"use client";
import React from "react";

import undrawCooking from "~assets/images/undraw/undraw_cooking.svg";
import useAuthChanged from "~hooks/useAuthChanged";
import FormHero from "~organisms/formHero/FormHero";
import * as routerConstants from "~constants/router.constants";

const LoginPage = () => {
  const { user, router } = useAuthChanged();

  if (user) {
    return router.push(routerConstants.ROUTE_APP.APP_HOME_PAGE);
  }

  return <FormHero variant="login" imageSrc={undrawCooking} />;
};

export default LoginPage;
