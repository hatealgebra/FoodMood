import React from "react";

import { VStack } from "@chakra-ui/react";
import AppNavbar from "~molecules/appNavbar/AppNavbar";
import AppSection from "~molecules/appSection/AppSection";

const AppPage: React.FC<Props> = ({ children }) => {
  return (
    <VStack pb={20}>
      <AppSection yAxisMinus hideHeading>
        <AppNavbar />
      </AppSection>
      {children}
    </VStack>
  );
};

export default AppPage;
