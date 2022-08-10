import React from "react";

import {
  HStack,
  Stack,
  Text,
  VStack,
  Box,
  List,
  ListItem,
  Link,
} from "@chakra-ui/react";
import { Link as GatsbyLink } from "gatsby";

import * as routerConstantClass from "../../../utils/constants/router.constants";

import CustomIcon from "../../atoms/customIcon/customIcon/CustomIcon";
import Logo from "../../atoms/logo/Logo";

import { GrFacebook, GrInstagram, GrLinkedin } from "react-icons/gr";
import { BiCopyright } from "react-icons/bi";

// TODO Layout Footer

const Footer = () => {
  const { ROUTE_APP, ROUTE_WEB } = routerConstantClass;
  return (
    <footer>
      <Box
        p={{ base: "30px 10px", sm: "30px 20px", md: "50px 40px 20px 40px" }}
        bg="#f2f2f2"
      >
        <Stack
          direction={["column", "column", "row"]}
          spacing={12}
          justify="space-between"
          width={["90%", "80%"]}
          maxW="800px"
          margin="auto"
        >
          <VStack align="flex-start" spacing={5}>
            <GatsbyLink to={ROUTE_APP.APP_HOME_PAGE}>
              <Logo />
            </GatsbyLink>
            <Text maxW={["220px", "270px"]}>
              Food Mood is the app that helps you with meal diversity and
              healthy lifestyle
            </Text>
            <HStack spacing={5} color="tertiary.500">
              <Link
                href="https://www.facebook.com/Strive.for.food"
                isExternal
                aria-label="social-link"
              >
                <CustomIcon icon={GrFacebook} color="secondary" />
              </Link>
              <Link
                href="https://www.instagram.com/hatealgebra/"
                isExternal
                aria-label="social-link"
              >
                <CustomIcon icon={GrInstagram} color="secondary" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/pavel-vondra-603012201/"
                isExternal
                aria-label="social-link"
              >
                <CustomIcon icon={GrLinkedin} color="secondary" />
              </Link>
            </HStack>
          </VStack>
          <VStack align="flex-start">
            <Text fontSize="lg" fontWeight="700" m={0}>
              Pages
            </Text>
            <List spacing={3} as={VStack} variant="nav">
              <ListItem>
                <Link as={GatsbyLink} to="/">
                  Homepage
                </Link>
              </ListItem>
              ,
              <ListItem>
                <Link as={GatsbyLink} to={ROUTE_APP.APP_HOME_PAGE}>
                  Explore App
                </Link>
              </ListItem>
              <ListItem>
                <Link as={GatsbyLink} to={ROUTE_WEB.ABOUT_PAGE}>
                  About
                </Link>
              </ListItem>
              ,
              <ListItem>
                <Link as={GatsbyLink} to={ROUTE_WEB.TERMS_POLICY_PAGE}>
                  Terms & Policy
                </Link>
              </ListItem>
            </List>
          </VStack>
          <VStack align="flex-start">
            <Text fontSize="lg" fontWeight="700" m={0}>
              Application
            </Text>
            <List spacing={3} as={VStack} variant="nav">
              <ListItem>
                <Link as={GatsbyLink} to={ROUTE_APP.APP_HOME_PAGE}>
                  Home
                </Link>
              </ListItem>
              <ListItem>
                <Link as={GatsbyLink} to={ROUTE_APP.APP_SEARCH_PAGE}>
                  Search recipes
                </Link>
              </ListItem>

              <ListItem>
                <Link as={GatsbyLink} to={ROUTE_APP.APP_FAVOURITES_PAGE}>
                  Favourite meals
                </Link>
              </ListItem>
              <ListItem>
                <Link as={GatsbyLink} to={ROUTE_APP.APP_MEAL_PLAN_PAGE}>
                  Meal plan
                </Link>
              </ListItem>
            </List>
          </VStack>
        </Stack>
        <HStack justify="center" fontWeight="400" isInline mt={20}>
          <CustomIcon icon={BiCopyright} />
          <Text color="mono.400">2021 FoodMood. All rights reserved.</Text>
        </HStack>
      </Box>
    </footer>
  );
};

export default Footer;
