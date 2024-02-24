import { Button, Heading, Image, Text, VStack } from '@chakra-ui/react';
// import NextImage from 'next/image';

import BannerContainer from './BannerContainer';
import oatmealPNG from '../../../assets/images/oatmeal.png';

const sizeToHeight = {
  sm: '250px',
  md: '500px',
  lg: '750px',
};

export interface SearchBannerProps {
  heading: string;
  buttonText: string;
  paragraph?: string;
  size?: 'sm' | 'md' | 'lg';
  backgroundColor?: string;
  padding?: string;
}

const SearchBanner = ({
  heading,
  buttonText,
  paragraph,
  size = 'md',
  backgroundColor,
  padding,
}: SearchBannerProps) => {
  return (
    <BannerContainer backgroundColor={backgroundColor}>
      <Image
        src={oatmealPNG}
        alignSelf="center"
        height={`calc(${sizeToHeight[size]} + ${padding})`}
        width={{ base: '100%', md: '50%' }}
        maxWidth="450px"
        alt="Otmeal"
        objectFit="contain"
      />
      <VStack
        justifyContent="center"
        alignItems={['center', 'flex-start']}
        padding={{ base: '0 5%', md: '0 5% 0 0' }}
        textAlign="left"
      >
        <Heading as="h2" size="xl">
          {heading}
        </Heading>
        <Text margin="unset">{paragraph}</Text>
        <Button colorScheme="tertiary">{buttonText}</Button>
      </VStack>
    </BannerContainer>
  );
};

export default SearchBanner;
