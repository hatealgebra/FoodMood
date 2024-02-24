import {
  Heading,
  SimpleGrid,
  Image,
  UnorderedList,
  ListItem,
  Box,
  Text,
} from '@chakra-ui/react';
import { Section } from 'ui-shared';

import hamburgerDeconstruct from '../../assets/images/presentation/hamburger_deconstructed.jpg';

// TODO: Repair the layout, keep the text on right side, the image on the left

const HamburgerRecipe = () => (
  <Section bg="#111111">
    <SimpleGrid
      gridTemplateAreas={{
        base: `"burgerHeading" "burgerPhoto" "burgerInfo"`,
        md: `"burgerHeading burgerHeading" "burgerPhoto burgerInfo"`,
        xl: `"burgerPhoto burgerHeading" "burgerPhoto burgerInfo"`,
      }}
      spacing="40px"
      align="center"
      color="white"
      fontFamily="chalk"
    >
      <Heading
        as="h2"
        fontFamily="body"
        fontSize="xxx-large"
        gridArea="burgerHeading"
      >
        Classic Hamburger.
      </Heading>
      <Image
        gridArea="burgerPhoto"
        src={hamburgerDeconstruct}
        alt="Deconstructed hamburger"
        w="100%"
        height="auto"
        maxHeight={{ base: '800px', xl: '1200px' }}
        objectFit="contain"
      />
      <SimpleGrid
        py={10}
        spacing={20}
        gridArea="burgerInfo"
        gridTemplateColumns={{ '2xl': '1fr 1fr' }}
        justifyItems="center"
      >
        <UnorderedList fontFamily="chalk" title="Ingredients">
          <ListItem>1lb. ground beef or chuck</ListItem>
          <ListItem>Salt and freshly ground black pepper</ListItem>
          <ListItem>4 soft white hamburger bun, split</ListItem>
          <ListItem>1/4 - thick slice of a large ripe tomato</ListItem>
          <ListItem>12-16 slice pickles (optional)</ListItem>
          <ListItem>4 small leaves iceberg lettuce</ListItem>
          <ListItem>4 thick slice peeled onion</ListItem>
        </UnorderedList>
        <Box>
          <Heading as="h3" textAlign="center" fontFamily="body">
            Nutrients per serving
          </Heading>
          <SimpleGrid
            sx={{ span: { fontFamily: 'body', textTransform: 'uppercase' } }}
            columns={3}
            spacing={5}
            mt={5}
            maxW="350px"
          >
            <Box>
              <span>fat</span>
              <div>25g</div>
            </Box>
            <Box>
              <span>fiber</span>
              <div>1.7g</div>
            </Box>
            <Box>
              <span>sugar</span>
              <div>4.5g</div>
            </Box>
            <Box>
              <span>protein</span>
              <div>25g</div>
            </Box>
            <Box>
              <span>Vitamin C</span>
              <div>6.3mg</div>
            </Box>
            <Box>
              <span>mag</span>
              <div>36.5mg</div>
            </Box>
          </SimpleGrid>
        </Box>
        <Box
          textAlign="center"
          gridColumn={{ '2xl': '1/3' }}
          justifySelf="center"
        >
          <Heading as="h3" textDecoration="underline" fontFamily="body">
            Total calories
          </Heading>
          <Text position="relative" bottom={8} fontSize="3xl">
            420 kcal
          </Text>
        </Box>
      </SimpleGrid>
    </SimpleGrid>
  </Section>
);

export default HamburgerRecipe;
