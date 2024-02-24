import {
  Button,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import { Section } from 'ui-shared';

import englishBreakfast from '../../assets/images/presentation/english_breakfast.svg';
import runningMan from '../../assets/images/presentation/running_man.svg';
import femaleChef from '../../assets/images/presentation/female_chef.svg';

const LastSection = () => (
  <Section>
    <SimpleGrid
      spacing={[10, 5, 5]}
      maxW={{ base: '500px', lg: '1200px' }}
      margin="auto"
      gridTemplateColumns={{ lg: '2fr .5fr 2fr .5fr' }}
      justifyItems={{ lg: 'center' }}
    >
      <Flex
        align="flex-start"
        justifySelf={{ base: 'flex-start', lg: 'center' }}
        flexDirection={{ base: 'column' }}
        gridColumn={{ lg: '1/3' }}
      >
        <Image
          width="90%"
          maxW="320px"
          src={englishBreakfast}
          alt="English breakfast"
          mb={6}
        />
        <Heading as="h3">Right Meal</Heading>
        <Text maxW="220px">
          Find right meal for you, even if You are vegan, vegetarian or
          meat-lover, just type what you want and get variety of food recipes
        </Text>
      </Flex>
      <Flex
        gridColumn={{ lg: '3/5' }}
        align={['center', 'flex-end']}
        justifySelf={['center', 'flex-end', 'flex-end', 'center']}
        flexDirection="column"
      >
        <Image
          width="90%"
          maxW="320px"
          src={runningMan}
          alt="Running man"
          mb={6}
        />
        <Heading as="h3">Diet Plan</Heading>
        <Text maxW="220px" textAlign="center">
          Set your individual nutritionist plan that fits you and your workout
          plan. Save recipes and build truly yours day to day food plan!
        </Text>
      </Flex>
      <Flex
        gridColumn="1/2"
        align={{ base: 'flex-end', md: 'flex-start' }}
        justifySelf={['flex-end', 'flex-start', 'flex-start', 'center']}
        flexDir="column"
      >
        <Heading as="h3">Be Chef</Heading>
        <Text textAlign={{ base: 'right', md: 'left' }} maxW="220px" mb={6}>
          Find right meal for you, even if You are vegan, vegetarian or
          meat-lover, just type what you want and get variety of food recipes
        </Text>
        <Button colorScheme="primary">Get Recipes</Button>
      </Flex>
      <Image
        justifySelf="flex-end"
        gridColumn={{ lg: '2/5' }}
        width="100%"
        maxW={{ base: '450px', lg: '550px' }}
        src={femaleChef}
        alt="Female chef"
        mb={6}
        position="relative"
        top="60px"
      />
    </SimpleGrid>
  </Section>
);

export default LastSection;
