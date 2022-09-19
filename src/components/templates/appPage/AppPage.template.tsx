import React from "react";

import { navigate } from "gatsby";
import { getAuth } from "firebase/auth";

import { VStack } from "@chakra-ui/react";
import AppNavbar from "../../molecules/appNavbar/AppNavbar";
import GenericPage from "../genericPage/GenericPage";
import AppSection from "../../molecules/appSection/AppSection";

const AppPage = ({ children }: { children: React.ReactNode }) => {
  return getAuth().currentUser === null ? (
    navigate("/login")
  ) : (
    <GenericPage>
      <VStack pb={20}>
        <AppSection yAxisMinus hideHeading>
          <AppNavbar />
        </AppSection>
        {children}
      </VStack>
    </GenericPage>
  );
};

export default AppPage;
