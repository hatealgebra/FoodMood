import React from "react";

import {
  Box,
  Container,
  HStack,
  Image,
  Link,
  Text,
  VStack,
  Heading,
  Flex,
  SimpleGrid,
  Spacer,
  Button,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import "@fontsource/kalam";

import * as routerConstClass from "~constants/router.constants";

import Section from "../atoms/section/Section";
import NextLink from "next/link";
import NextImage from "next/image";

import tomatoSalad from "~assets/images/presentation/tomato-salad.png";
import pastaBeef from "~assets/images/presentation/pasta-w-beef.png";
import indiaSoup from "~assets/images/presentation/india-soup.png";
import tofu from "~assets/images/presentation/tofu.png";
import chickenCurry from "~assets/images/presentation/chicken-curry.png";
import fettucini from "~assets/images/presentation/fettucini.png";
import hamburgerDeconstruct from "~assets/images/presentation/hamburger_deconstructed.jpg";
import englishBreakfast from "~assets/images/presentation/english_breakfast.svg";
import runningMan from "~assets/images/presentation/running_man.svg";
import femaleChef from "~assets/images/presentation/female_chef.svg";
import heroSection from "~assets/images/presentation/heroSection.svg";
import biggerHeroSection from "~assets/images/presentation/bigger_hero_section.svg";
import pastaWShells from "~assets/images/presentation/pasta_w_shells.png";
import losoWShells from "~assets/images/presentation/losos_with_shells.png";
import falafel from "~assets/images/presentation/falafel_carrot_califlower.png";

// const NutrientsBox = styled.div`
//   text-align: center;
//   font-weight: bold;
//   span {
//     text-transform: uppercase;
//     display: inline;
//   }
// `;

const HomePagePresentation = ({ mobile }: { mobile?: boolean }) => {
  return (
    <VStack align="inherit" boxSizing="border-box">
      <FirstSection mobile={mobile} />
      <PopularFood />
      {/* Receipt chalk section */}
      <HamburgerRecipe />
      <LastSection />
    </VStack>
  );
};

const LastSection = () => (
  <Section>
    <SimpleGrid
      spacing={[10, 5, 5]}
      maxW={{ base: "500px", lg: "1200px" }}
      margin="auto"
      gridTemplateColumns={{ lg: "2fr .5fr 2fr .5fr" }}
      justifyItems={{ lg: "center" }}
    >
      <Flex
        align="flex-start"
        justifySelf={{ base: "flex-start", lg: "center" }}
        flexDirection={{ base: "column" }}
        gridColumn={{ lg: "1/3" }}
      >
        <Image
          as={NextImage}
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
        gridColumn={{ lg: "3/5" }}
        align={["center", "flex-end"]}
        justifySelf={["center", "flex-end", "flex-end", "center"]}
        flexDirection="column"
      >
        <Image
          as={NextImage}
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
        align={{ base: "flex-end", md: "flex-start" }}
        justifySelf={["flex-end", "flex-start", "flex-start", "center"]}
        flexDir="column"
      >
        <Heading as="h3">Be Chef</Heading>
        <Text textAlign={{ base: "right", md: "left" }} maxW="220px" mb={6}>
          Find right meal for you, even if You are vegan, vegetarian or
          meat-lover, just type what you want and get variety of food recipes
        </Text>
        <Button>Get Recipes</Button>
      </Flex>
      <Image
        as={NextImage}
        justifySelf="flex-end"
        gridColumn={{ lg: "2/5" }}
        width="100%"
        maxW={{ base: "450px", lg: "550px" }}
        src={femaleChef}
        alt="Female chef"
        mb={6}
        position="relative"
        top="60px"
      />
    </SimpleGrid>
  </Section>
);

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
      fontFamily="Kalam"
    >
      <Heading gridArea="burgerHeading" variant="chalk">
        Classic Hamburger.
      </Heading>
      <Image
        as={NextImage}
        gridArea="burgerPhoto"
        src={hamburgerDeconstruct}
        alt="Deconstructed hamburger"
        w="100%"
        height="auto"
        maxHeight={{ base: "800px", xl: "1200px" }}
        objectFit="contain"
      />
      <SimpleGrid
        py={10}
        spacing={20}
        gridArea="burgerInfo"
        gridTemplateColumns={{ "2xl": "1fr 1fr" }}
        justifyItems="center"
      >
        <UnorderedList title="Ingredients">
          <ListItem>1lb. ground beef or chuck</ListItem>
          <ListItem>Salt and freshly ground black pepper</ListItem>
          <ListItem>4 soft white hamburger bun, split</ListItem>
          <ListItem>1/4 - thick slice of a large ripe tomato</ListItem>
          <ListItem>12-16 slice pickles (optional)</ListItem>
          <ListItem>4 small leaves iceberg lettuce</ListItem>
          <ListItem>4 thick slice peeled onion</ListItem>
        </UnorderedList>
        <Box>
          <Heading as="h3" variant="chalk" textAlign="center">
            Nutrients per serving
          </Heading>
          <SimpleGrid columns={3} spacing={5} mt={5} maxW="350px">
            <Box>
              <span>fat</span>
              <div>25g</div>
            </Box>
            <Box>
              <span>fiber</span>
              <div>1.7</div>
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
          gridColumn={{ "2xl": "1/3" }}
          justifySelf="center"
        >
          <Heading as="h3" textDecoration="underline" variant="chalk">
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
const PopularFood = () => (
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
        right={{ base: "10%%", md: "0" }}
        my="25px"
        mt="40px"
      >
        <Image
          as={NextImage}
          src={pastaWShells}
          alt="Pasta with shells"
          width={["120px", "120px", "160px"]}
        />
        <Image
          as={NextImage}
          src={tomatoSalad}
          alt="Tomato salad"
          width={["80px", "80px", "110px"]}
        />
        <Image
          as={NextImage}
          src={pastaBeef}
          alt="Pasta with beef"
          width={["120px", "120px", "160px"]}
        />
        <Image
          as={NextImage}
          src={indiaSoup}
          alt="India soup"
          width={["80px", "80px", "110px"]}
        />
        <Image
          as={NextImage}
          src={falafel}
          alt="Falafel with califlower & carrot"
          width="120px"
        />
      </HStack>
      <HStack
        spacing={10}
        position="relative"
        right={{ base: "10%", md: "0" }}
        my="25px"
      >
        <Image
          as={NextImage}
          src={losoWShells}
          alt="Loso with shells"
          width={["80px", "80px", "110px"]}
        />
        <Image
          as={NextImage}
          src={tofu}
          alt="Tofu with salad"
          width={["120px", "120px", "160px"]}
        />
        <Image
          as={NextImage}
          src={chickenCurry}
          alt="Chicken with curry"
          width={["80px", "80px", "110px"]}
        />
        <Image
          as={NextImage}
          src={fettucini}
          alt="Tomato fettucini"
          width={["120px", "120px", "160px"]}
        />
      </HStack>
    </Flex>
  </Section>
);

const FirstSection = ({ mobile }: { mobile?: boolean }) => (
  <Section>
    <Flex
      flexDirection={["column-reverse", "column-reverse", "row"]}
      alignItems="flex-end"
      minHeight={["50vh", "30vh"]}
      maxWidth={{ base: "600px", md: "1000px" }}
      margin="auto"
      position="relative"
      pb={[5, 10, 8]}
    >
      <Flex
        alignSelf={["flex-start", "flex-start", "center"]}
        position="relative"
        left={0}
        maxW={{ base: "320px", md: "380px" }}
        minW={{ base: "auto", sm: "300px" }}
        width="100%"
        mb={5}
        flexDirection="column"
        sx={{
          "@media only screen and (min-width: 670px) and (max-width: 760px)": {
            top: "-50px",
          },
        }}
      >
        <Heading as="h1">Let's Start Cooking With Popular Recipes</Heading>
        <Text>
          Want to learn cook but you are confused how to start? No need to worry
          again!
        </Text>
        <HStack my={1}>
          <Button
            as={NextLink}
            colorScheme="primary"
            href={routerConstClass.ROUTE_APP.APP_HOME_PAGE}
          >
            Get Started
          </Button>
          <Button
            as={NextLink}
            colorScheme="primary"
            href={routerConstClass.ROUTE_WEB.ABOUT_PAGE}
          >
            About
          </Button>
        </HStack>
      </Flex>
      <Spacer />
      {mobile ? (
        <Image
          as={NextImage}
          src={heroSection}
          position="relative"
          maxWidth={{ base: "300px", sm: "420px" }}
          width="100%"
          right={{ base: "-15%", sm: "0%", md: "10%" }}
          mb={["0px", "20px"]}
        />
      ) : (
        <Image
          as={NextImage}
          src={biggerHeroSection}
          maxWidth={["380px", "380px", "400px", "800px"]}
          mt={2}
        />
      )}
      {!mobile && (
        <Box
          position="absolute"
          right={8}
          top={"-100px"}
          bottom={"100px"}
          bg="mono.200"
          height="500px"
          width="250px"
          zIndex={-1}
        ></Box>
      )}
    </Flex>
  </Section>
);

export default HomePagePresentation;
