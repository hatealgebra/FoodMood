import { Flex } from "@chakra-ui/react";
import React, { ReactElement } from "react";

const FormContainer = ({ children }: FormContainerProps) => {
  return (
    <Flex
      aria-label="form-container"
      flexDirection={["column", "column", "row"]}
      placeItems="space-between"
      p="5%"
      pt={{ lg: "2%" }}
      placeContent="center"
      w="100%"
      margin="auto"
    >
      {children}
    </Flex>
  );
};

interface FormContainerProps {
  children: ReactElement | ReactElement[] | string;
}

export default FormContainer;
