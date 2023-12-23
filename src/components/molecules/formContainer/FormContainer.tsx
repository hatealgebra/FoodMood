import { Flex } from "@chakra-ui/react";
import React, { ReactElement } from "react";

const FormContainer = ({ children }: FormContainerProps) => {
  return (
    <Flex
      aria-label="form-container"
      flexDirection={["column", "column", "row"]}
      gap="10%"
      placeItems="space-between"
      m="15vh auto"
      placeContent="center"
      w={["95%", "90%", "80%"]}
      h="fit-content"
    >
      {children}
    </Flex>
  );
};

interface FormContainerProps {
  children: ReactElement | ReactElement[] | string;
}

export default FormContainer;
