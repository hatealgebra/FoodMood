"use client";

import React from "react";

import { VStack } from "@chakra-ui/react";
import AppNavbar from "~molecules/appNavbar/AppNavbar";
import AppSection from "~molecules/appSection/AppSection";

import { useRouter } from "next/navigation";
import * as routerConstants from "~constants/router.constants";
import useAuthChanged from "~hooks/useAuthChanged";
import Loading from "./loading";
import ModalRecipe from "~organisms/modalRecipe/ModalRecipe";

const AppPage: React.FC<Props> = ({ children }) => {
  const [isLoggedIn] = useAuthChanged();

  if (!isLoggedIn) {
    return <Loading />;
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
