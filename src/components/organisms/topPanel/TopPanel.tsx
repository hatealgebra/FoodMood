"use client";
import React, { useState, useEffect } from "react";

import { clearAllBodyScrollLocks } from "body-scroll-lock";

import * as routerConstantClass from "~constants/router.constants";

import {
  Flex,
  Spacer,
  HStack,
  Box,
  Link,
  IconButton,
  useMediaQuery,
} from "@chakra-ui/react";
import MobileMenu from "~molecules/mobileMenu/MobileMenu";
import Logo from "~atoms/logo/Logo";

import { FiMenu } from "react-icons/fi";
import ModalContact from "~molecules/modalContact/ModalContact";
import UserAvatar from "~molecules/userAvatar/UserAvatar";
import { useAppSelector } from "~store/hooks";
import { selectUserStatus } from "~store/slices/user.slice";
import TabletMenu from "~molecules/tabletMenu/TabletMenu";
import { getAuth, User } from "firebase/auth";
import useWindowSize, { WindowSize } from "~hooks/useWindowSize";

// ! hook for scroll handler

const TopPanel = ({ device = "mobile" }: TopPanelProps) => {
  const { ROUTE_WEB } = routerConstantClass;
  const { displayName } = getAuth().currentUser || ({} as User);
  const [isTouchMenuOpen, setTouchMenuOpen] = useState(false);
  const [scrollState, setScrollState] = useState(false);
  const [isContactOpen, setContactOpen] = useState(false);
  const userStatus = useAppSelector(selectUserStatus);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
  });

  useEffect(() => {
    // If route locaiton is change, all body scroll locks are disable, should solve bugs when
    // redirecting
    clearAllBodyScrollLocks();
  }, []);

  const onScroll = (e: any) => {
    if (e.target.documentElement.scrollTop > 0 && isTouchMenuOpen === false) {
      return setScrollState(true);
    }
    return setScrollState(false);
  };

  const toggleMobileMenu = () =>
    setTouchMenuOpen((prevState) => {
      if (prevState === false) {
        setScrollState(false);
        // disableBodyScroll(HeaderStyled);
      } else {
        setScrollState(true);
        // enableBodyScroll(HeaderStyled);
      }
      return !prevState;
    });

  const openModalContact = () => setContactOpen(true);
  const closeModalContact = () => setContactOpen(false);

  return (
    <Box
      as="header"
      top={0}
      pos="absolute"
      display="flex"
      flexDir="column"
      w="100%"
      h="auto"
      boxSizing="border-box"
      zIndex={99}
      bgColor="white"
    >
      <Box
        position="fixed"
        width="100%"
        boxShadow={scrollState ? "md" : "none"}
        bg={scrollState ? "white" : "transparent"}
        top={0}
        zIndex={100}
      >
        <Flex
          align="center"
          justifyContent="center"
          boxSizing="border-box"
          py={[".5em", ".6em"]}
          px={["1em", "1.5em"]}
          flexWrap="nowrap"
          width="100%"
          maxWidth="1100px"
          margin="auto"
        >
          <Link href="/">
            <Logo width={["120px", "150px"]} />
          </Link>
          <Spacer />
          <Spacer />
          <Flex display={{ base: "none", desktop: "flex" }}>
            <HStack
              aria-label="desktop-navigation"
              as="nav"
              fontWeight="600"
              spacing={14}
              mr="5vw"
            >
              <Link href="/">Home</Link>
              <Link href={ROUTE_WEB.ABOUT_PAGE}>About</Link>
              <Link href={ROUTE_WEB.TERMS_POLICY_PAGE}>Terms</Link>
              <Link onClick={openModalContact}>Contact</Link>
            </HStack>
            <Spacer />
            <UserAvatar name={displayName} status={userStatus} />
          </Flex>
          <IconButton
            aria-label="Menu button"
            icon={<FiMenu size={25} color="mono.400" />}
            display={{ desktop: "none" }}
            onClick={toggleMobileMenu}
          />
        </Flex>
      </Box>
      <MobileMenu isOpen={isTouchMenuOpen} />
      <Box display={{ base: "none", tablet: "block", desktop: "none" }}>
        <TabletMenu
          isOpen={isTouchMenuOpen}
          onClose={() => setTouchMenuOpen(false)}
        />
      </Box>
      <ModalContact
        isOpen={isContactOpen}
        onClose={closeModalContact}
        onOpen={openModalContact}
      />
    </Box>
  );
};

export interface TopPanelProps {
  device?: "mobile" | "tablet" | "desktop";
}

export default TopPanel;
