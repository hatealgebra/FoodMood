import React, { useState } from "react";
import { Box, Link, SimpleGrid } from "@chakra-ui/react";

import * as routeConstClass from "../../../utils/constants/router.constants";
import { Link as GatsbyLink } from "gatsby";
import useHover from "../../../utils/hooks/useHover";

// Hovering is done through the component styling from chakra UI
// TODO: Cypress styling maybe?

const AppNavbar = () => {
  const {
    APP_HOME_PAGE,
    APP_SEARCH_PAGE,
    APP_FAVOURITES_PAGE,
    APP_MEAL_PLAN_PAGE,
  } = routeConstClass.ROUTE_APP;
  const pathName = window.location.pathname;
  const [ref, value] = useHover();
  const [activeNav, setActiveNav] = useState<string>(value);

  const NavbarLink = ({ url, children }: NavbarLinkProps) => {
    return (
      <Link
        variant="appNav"
        onClick={() => setActiveNav(url)}
        as={GatsbyLink}
        to={url}
        ref={ref}
        sx={{
          color: url === pathName ? "white" : "black",
          "&:hover": {
            textDecorationColor: "primary.500",
            textDecoration: url === pathName ? "none" : "underline",
          },
        }}
        color="mono.500"
        fontWeight="bold"
      >
        {children}
      </Link>
    );
  };

  interface NavbarLinkProps {
    url: string;
    children: string;
  }

  return (
    <SimpleGrid
      textTransform="uppercase"
      fontWeight="600"
      position="relative"
      templateRows="1fr"
      m="5px 0"
    >
      <NavbarLink url={APP_HOME_PAGE}>Home</NavbarLink>
      <NavbarLink url={APP_SEARCH_PAGE}>Search</NavbarLink>
      <NavbarLink url={APP_FAVOURITES_PAGE}>Saved Recipes</NavbarLink>
      {/* <NavbarLink url={APP_MEAL_PLAN_PAGE}>Meal Plan</NavbarLink> */}
      <Box
        position="absolute"
        className="hover-effect"
        w="105%"
        height="27px"
        bg="primary.500"
        zIndex={-1}
        borderRadius="15px"
        transition=".5s ease"
        placeSelf="center"
        gridColumn={
          pathName === APP_HOME_PAGE
            ? "1/2"
            : pathName === APP_SEARCH_PAGE
            ? "2/3"
            : pathName === APP_FAVOURITES_PAGE
            ? "3/4"
            : "4/5"
        }
      />
    </SimpleGrid>
  );
};

export default AppNavbar;
