import { Button, Heading, Image, Text, VStack } from "@chakra-ui/react";
import NextImage from "next/image";

import BannerContainer from "./BannerContainer";
import undrawPreferences from "~assets/images/undraw/undraw_preferences.svg";

interface PreferencesBannerProps {
  heading: string;
  paragraph: string;
  buttonText: string;
  size?: "md" | "lg";
  backgroundColor?: string;
  padding?: string;
}

const PreferencesBanner = ({
  heading,
  paragraph,
  buttonText,
}: PreferencesBannerProps) => {
  return (
    <BannerContainer backgroundColor="secondary.100" fullHeight>
      <VStack padding="5% 0" width="70%" maxWidth="500px" margin="auto">
        <Heading as="h2" size="xl">
          {heading}
        </Heading>
        <Text>{paragraph}</Text>
        <Button colorScheme="tertiary" alignSelf="flex-start">
          {buttonText}
        </Button>
      </VStack>
    </BannerContainer>
  );
};

export default PreferencesBanner;
