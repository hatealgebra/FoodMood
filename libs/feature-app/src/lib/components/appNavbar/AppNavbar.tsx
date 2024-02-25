'use client';
import React, { useState } from 'react';
import { Box, Link, SimpleGrid } from '@chakra-ui/react';
import NextLink from 'next/link';

import { useHover } from 'ui-shared';
import { ROUTES_APP } from '../../route.constants';
import { usePathname } from 'next/navigation';
import path from 'path';
// Hovering is done through the component styling from chakra UI

const AppNavbar = () => {
  const [ref, value] = useHover();
  const pathname = usePathname();

  console.log(pathname);
  const NavbarLink = ({ url, children }: NavbarLinkProps) => {
    return (
      <Link
        variant="appNav"
        as={NextLink}
        w="100px"
        href={url}
        ref={ref}
        sx={{
          color: url === pathname ? 'white' : 'black',
          '&:hover': {
            textDecorationColor: 'primary.500',
            textDecoration: url === pathname ? 'none' : 'underline',
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
      w="fit-content"
      m="5px 0"
    >
      {Object.values(ROUTES_APP).map((route) => (
        <NavbarLink key={route.path} url={route.path}>
          {route.name}
        </NavbarLink>
      ))}
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
        // gridColumn={
        //   activeNav === APP_HOME_PAGE
        //     ? '1/2'
        //     : activeNav === APP_SEARCH_PAGE
        //       ? '2/3'
        //       : activeNav === APP_FAVOURITES_PAGE
        //         ? '3/4'
        //         : '4/5'
        // }
      />
    </SimpleGrid>
  );
};

export default AppNavbar;
