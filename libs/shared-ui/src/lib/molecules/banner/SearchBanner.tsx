import { Button, Heading, Image, Text, VStack } from '@chakra-ui/react';
// import NextImage from 'next/image';

import BannerContainer from './BannerContainer';
import oatmealPNG from '../../assets/images/presentation/oatmeal.png';
// import { sizeToHeight } from './sizeConvert.utils';

interface SearchBannerProps {
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
        // height={`calc(${sizeToHeight[size]} + ${padding})`}
        width="auto"
        alt="Otmeal"
        objectFit="contain"
      />
      <VStack
        justifyContent="center"
        alignItems="flex-start"
        padding="0 5%"
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
