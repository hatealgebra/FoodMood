import React from 'react';

import { Flex, Box, Text } from '@chakra-ui/react';

const CustomDivider = ({ children, width }: CustomDividerProps) => {
  return (
    <Flex aria-label="divider" color="mono.300" align="center" width={width}>
      <Box borderColor="mono.300" borderBottomWidth="1px" width="100%" />
      <Text flex="1 0 auto" mx={5} as="span" fontWeight="500">
        {children}
      </Text>
      <Box borderColor="mono.300" borderBottomWidth="1px" width="100%" />
    </Flex>
  );
};

export interface CustomDividerProps {
  children: string;
  width?: string;
}

export default CustomDivider;
