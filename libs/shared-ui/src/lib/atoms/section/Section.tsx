import { Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  bg?: string;
  yAxisMinus?: boolean;
  app?: boolean;
}

const Section: React.FC<SectionProps> = ({ children, bg, yAxisMinus, app }) => {
  return (
    <Box
      bg={bg}
      as="section"
      py={yAxisMinus ? 0 : { base: 3, lg: 10 }}
      mt={0}
      w="100%"
    >
      {children}
    </Box>
  );
};

export default Section;
