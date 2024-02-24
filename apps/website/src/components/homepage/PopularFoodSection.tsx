import {
  Container,
  Flex,
  HStack,
  Heading,
  Image,
  Text,
} from '@chakra-ui/react';
import { Section } from 'ui-shared';

import pastaWShells from '../../assets/images/presentation/pasta_w_shells.png';
import tomatoSalad from '../../assets/images/presentation/tomato-salad.png';
import pastaBeef from '../../assets/images/presentation/pasta-w-beef.png';
import indiaSoup from '../../assets/images/presentation/india-soup.png';
import falafel from '../../assets/images/presentation/falafel_carrot_califlower.png';
import losoWShells from '../../assets/images/presentation/losos_with_shells.png';
import tofu from '../../assets/images/presentation/tofu.png';
import chickenCurry from '../../assets/images/presentation/chicken-curry.png';
import fettucini from '../../assets/images/presentation/fettucini.png';

const PopularFoodSection = () => (
  <Section bg="mono.200">
    <Flex flexDir="column" alignItems="center">
      <Container textAlign="center">
        <Heading as="h2">Popular Food</Heading>
        <Text>
          We provide a variety of food and average recipes with high taste from
          famous chefs
        </Text>
      </Container>
      <HStack
        spacing={10}
        position="relative"
        right={{ base: '10%%', md: '0' }}
        my="25px"
        mt="40px"
      >
        <Image
          src={pastaWShells}
          alt="Pasta with shells"
          width={['120px', '120px', '160px']}
        />
        <Image
          src={tomatoSalad}
          alt="Tomato salad"
          width={['80px', '80px', '110px']}
        />
        <Image
          src={pastaBeef}
          alt="Pasta with beef"
          width={['120px', '120px', '160px']}
        />
        <Image
          src={indiaSoup}
          alt="India soup"
          width={['80px', '80px', '110px']}
        />
        <Image
          src={falafel}
          alt="Falafel with califlower & carrot"
          width="120px"
        />
      </HStack>
      <HStack
        spacing={10}
        position="relative"
        right={{ base: '10%', md: '0' }}
        my="25px"
      >
        <Image
          src={losoWShells}
          alt="Loso with shells"
          width={['80px', '80px', '110px']}
        />
        <Image
          src={tofu}
          alt="Tofu with salad"
          width={['120px', '120px', '160px']}
        />
        <Image
          src={chickenCurry}
          alt="Chicken with curry"
          width={['80px', '80px', '110px']}
        />
        <Image
          src={fettucini}
          alt="Tomato fettucini"
          width={['120px', '120px', '160px']}
        />
      </HStack>
    </Flex>
  </Section>
);

export default PopularFoodSection;
