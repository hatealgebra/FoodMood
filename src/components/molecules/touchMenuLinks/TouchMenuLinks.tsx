import React from "react";

import { Link, ListItem, UnorderedList } from "@chakra-ui/react";
//  FIXME Gatsby Links
// import { Link as LinkRouter } from "react-router-dom";

import * as routerConstantClass from "../../../utils/constants/router.constants";

interface TouchMenuLinksProps {
  noMargin?: boolean;
}

const TouchMenuLinks = ({ noMargin }: TouchMenuLinksProps) => {
  return (
    <UnorderedList
      mt={20}
      gridArea="list"
      listStyleType="none"
      fontSize="xl"
      fontWeight="bold"
      spacing={8}
      colorScheme="mono"
      mx={noMargin ? 0 : [5, 16]}
    >
      <ListItem>
        {/* <Link as={LinkRouter} to="/" color="mono.500">
          Homepage
        </Link>
      </ListItem>
      <ListItem>
        <Link
          as={LinkRouter}
          to={routerConstantClass.ROUTE_APP.APP_HOME_PAGE}
          color="mono.500"
        >
          Explore App
        </Link>
      </ListItem>
      <ListItem>
        <Link
          as={LinkRouter}
          to={routerConstantClass.ROUTE_WEB.ABOUT_PAGE}
          color="mono.500"
        >
          About
        </Link>
      </ListItem>
      <ListItem>
        <Link
          as={LinkRouter}
          to={routerConstantClass.ROUTE_WEB.TERMS_POLICY_PAGE}
          color="mono.500"
        >
          Terms & policy
        </Link> */}
      </ListItem>
    </UnorderedList>
  );
};

export default TouchMenuLinks;
