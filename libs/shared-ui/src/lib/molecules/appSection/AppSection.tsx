import { Box, Heading, VStack } from '@chakra-ui/react';
import React from 'react';

import Section from '../../atoms/section/Section';

const AppSection: React.FC<AppSectionProps> = ({
  headingOne,
  headingTwo,
  children,
  yAxisMinus,
  secondary,
  hideHeading,
  fullWidth,
  noPadHeading,
  ...props
}) => {
  return (
    <Section yAxisMinus={yAxisMinus} {...props}>
      <VStack alignContent="center" align="flex-start">
        {!hideHeading && (
          <Heading
            variant="fira"
            as="h2"
            size="md"
            px={['2.5vw', '5.5vw', '5.5vw', noPadHeading ? 0 : '10.5vw']}
            width="full"
            textAlign={['center', 'left']}
          >
            <Box color="#373737" textTransform="uppercase" display="inline">
              {headingOne}
            </Box>
            <Box
              ml={2}
              textTransform="uppercase"
              color={secondary ? 'secondary.500' : 'primary.500'}
              display="inline"
            >
              {headingTwo}
            </Box>
          </Heading>
        )}
        <Box
          display="box"
          w="100%"
          px={['2.5vw', '5.5vw', '5.5vw', !fullWidth ? '10.5vw' : 0]}
        >
          {children}
        </Box>
      </VStack>
    </Section>
  );
};

export interface AppSectionProps {
  children: any;
  headingOne?: string | null;
  headingTwo?: string;
  yAxisMinus?: boolean;
  secondary?: boolean;
  hideHeading?: boolean;
  fullWidth?: boolean;
  noPadHeading?: boolean;
}

export default AppSection;
