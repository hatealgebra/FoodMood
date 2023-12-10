import React from "react";

import { VStack } from "@chakra-ui/react";
import AppNavbar from "../../molecules/appNavbar/AppNavbar";
import GenericPage from "../genericPage/GenericPage";
import { Props } from "framer-motion/types/types";
import AppSection from "../../molecules/appSection/AppSection";

const AppPage: React.FC<Props> = ({ children }) => {
  // useEffect(() => {
  //   dispatch(logInUser(userDataMock));
  // }, []);

  return (
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
