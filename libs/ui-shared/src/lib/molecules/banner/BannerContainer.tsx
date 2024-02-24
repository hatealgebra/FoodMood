import { Box, Flex } from '@chakra-ui/react';
import { ReactNode } from 'react';
// import { sizeToHeight } from "./sizeConvert.utils";

interface BannerContainerProps {
  children: ReactNode;
  backgroundColor?: string;
  size?: 'sm' | 'md' | 'lg';
  margin?: string;
  fullHeight?: boolean;
}

const BannerContainer = ({
  children,
  backgroundColor,
  size = 'sm',
  fullHeight = false,
}: BannerContainerProps) => {
  return (
    <Flex
      flexDirection={['column', 'column', 'row']}
      padding={{ base: '0 5% 10%', lg: '0 5%' }}
      columnGap="10%"
      justifyContent={['flex-end', 'flex-end', 'center']}
      position="relative"
    >
      {children}
      <Box
        margin="auto"
        alignSelf="center"
        zIndex={-1}
        position="absolute"
        height={{
          base: `${!fullHeight ? '60%' : '100%'}`,
          // lg: !fullHeight ? sizeToHeight[size] : "100%",
        }}
        width="100%"
        bottom={[0, 0, 'unset']}
        backgroundColor={backgroundColor}
        borderRadius="10px"
      />
    </Flex>
  );
};

export default BannerContainer;
