import { Box, Heading, VStack } from "@chakra-ui/react";
import React from "react";

import Section from "../../atoms/section/Section";

const AppSection: React.FC<AppSectionProps> = ({
  headingOne,
  headingTwo,
  children,
  yAxisMinus,
  secondary,
  hideHeading,
  fullWidth,
}) => {
  return (
    <Section yAxisMinus={yAxisMinus}>
      <VStack maxW="1600px" alignContent="center" align="flex-start">
        {!hideHeading && (
          <Heading
            variant="fira"
            as="h2"
            size="md"
            w="fit-content"
            px={[0, "5.5vw", "5.5vw", "10.5vw"]}
          >
            <Box color="#373737" textTransform="uppercase" display="inline">
              {headingOne}
            </Box>
            <Box
              ml={2}
              textTransform="uppercase"
              color={secondary ? "secondary.500" : "primary.500"}
              display="inline"
            >
              {headingTwo}
            </Box>
          </Heading>
        )}
        <Box display="box" px={[0, "5.5vw", "5.5vw", fullWidth ? 0 : "10.5vw"]}>
          {children}
        </Box>
      </VStack>
    </Section>
  );
};

export interface AppSectionProps {
  headingOne?: string | null;
  headingTwo?: string;
  children: any;
  yAxisMinus?: boolean;
  secondary?: boolean;
  hideHeading?: boolean;
  fullWidth?: boolean;
}

export default AppSection;
