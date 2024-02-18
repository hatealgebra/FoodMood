import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Image,
  Spacer,
  Text,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Section } from '~shared-ui';

import heroSection from '../assets/images/presentation/heroSection.svg';
import biggerHeroSection from '../assets/images/presentation/bigger_hero_section.svg';
import ROUTE_WEB from '../route.constants';

interface FirstSectionProps {
  mobile?: boolean;
}

const FirstSection = ({ mobile }: FirstSectionProps) => (
  <Section>
    <Flex
      flexDirection={['column-reverse', 'column-reverse', 'row']}
      alignItems="flex-end"
      minHeight={['50vh', '30vh']}
      maxWidth={{ base: '600px', md: '1000px' }}
      margin="auto"
      position="relative"
      pb={[5, 10, 8]}
    >
      <Flex
        alignSelf={['flex-start', 'flex-start', 'center']}
        position="relative"
        left={0}
        maxW={{ base: '320px', md: '380px' }}
        minW={{ base: 'auto', sm: '300px' }}
        width="100%"
        mb={5}
        flexDirection="column"
        sx={{
          '@media only screen and (min-width: 670px) and (max-width: 760px)': {
            top: '-50px',
          },
        }}
      >
        <Heading as="h1">Let's Start Cooking With Popular Recipes</Heading>
        <Text>
          Want to learn cook but you are confused how to start? No need to worry
          again!
        </Text>
        <HStack my={1}>
          <Button as={Link} colorScheme="primary" href="">
            Get Started
          </Button>
          <Button
            as={Link}
            colorScheme="primary"
            href={ROUTE_WEB.ABOUT_PAGE.path}
          >
            About
          </Button>
        </HStack>
      </Flex>
      <Spacer />
      {mobile ? (
        <Image
          src={heroSection}
          position="relative"
          maxWidth={{ base: '300px', sm: '420px' }}
          width="100%"
          right={{ base: '-15%', sm: '0%', md: '10%' }}
          mb={['0px', '20px']}
        />
      ) : (
        <Image
          src={biggerHeroSection}
          maxWidth={['380px', '380px', '400px', '800px']}
          mt={2}
        />
      )}
      {!mobile && (
        <Box
          position="absolute"
          right={8}
          top={'-100px'}
          bottom={'100px'}
          bg="mono.200"
          height="500px"
          width="250px"
          zIndex={-1}
        ></Box>
      )}
    </Flex>
  </Section>
);

export default FirstSection;
