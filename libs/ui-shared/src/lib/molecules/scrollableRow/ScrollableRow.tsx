import React from 'react';

import { Box, HStack } from '@chakra-ui/react';

interface ScrollableRowProps {
  children: React.ReactNode;
  smallSpacing?: boolean;
}

const ScrollableRow: React.FC<ScrollableRowProps> = ({
  children,
  smallSpacing,
  ...props
}) => {
  return (
    <Box width="100%" my={3} transition=".5s all-ease" {...props}>
      <HStack
        spacing={smallSpacing ? 1 : 4}
        overflowX="scroll"
        sx={{
          MsOverflowStyle: 'none',
          '&::-webkit-scrollbar': { display: 'none' },
        }}
      >
        {children}
      </HStack>
    </Box>
  );
};

export default ScrollableRow;
