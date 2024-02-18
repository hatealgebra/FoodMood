import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface BlogContainerProps {
  children: ReactNode;
}

export const BlogLayout = ({ children }: BlogContainerProps) => {
  return (
    <Box
      margin="auto"
      py={{ base: '3vw' }}
      width="90%"
      maxW="800px"
      sx={{
        h3: { fontSize: 'lg' },
        ul: { paddingLeft: '30px' },
        p: { maxW: '600px', w: '85%' },
      }}
    >
      {children}
    </Box>
  );
};

export default BlogLayout;
