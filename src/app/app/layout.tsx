"use client";

import React from "react";

import { Box, VStack } from "@chakra-ui/react";
import AppNavbar from "~molecules/appNavbar/AppNavbar";
import AppSection from "~molecules/appSection/AppSection";

import { useRouter } from "next/navigation";
import * as routerConstants from "~constants/router.constants";
import useAuthChanged from "~hooks/useAuthChanged";
import Loading from "./loading";
import ModalRecipe from "~organisms/modalRecipe/ModalRecipe";

const AppPage: React.FC<Props> = ({ children }) => {
  const { isAuthenticating, user, router } = useAuthChanged();

  if (isAuthenticating) {
    return <Loading />;
  }

  if (!user) {
    return router.push(routerConstants.ROUTE_WEB.LOGIN_PAGE);
  }

  return (
    <VStack pb={20}>
      <AppSection yAxisMinus hideHeading>
        <AppNavbar />
      </AppSection>
      {children}
      <ModalRecipe />
    </VStack>
  );
};

export default AppPage;
