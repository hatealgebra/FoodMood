import React, { useState, useEffect } from "react";

import styled from "styled-components";
import { clearAllBodyScrollLocks } from "body-scroll-lock";

import * as routerConstantClass from "../../../utils/constants/router.constants";

import { Flex, Spacer, HStack, Box, Link, IconButton } from "@chakra-ui/react";
import MobileMenu from "../../molecules/mobileMenu/MobileMenu";
import Logo from "../../atoms/logo/Logo";
import { Link as GatsbyLink } from "gatsby";

import { FiMenu } from "react-icons/fi";
import ModalContact from "../../molecules/modalContact/ModalContact";
import UserAvatar from "../../molecules/userAvatar/UserAvatar";
import { useAppSelector } from "../../../store/hooks";
import { selectUserStatus } from "../../../store/slices/user.slice";
import TabletMenu from "../../molecules/tabletMenu/TabletMenu";
import { getAuth, User } from "firebase/auth";

// ! hook for scroll handler

const HeaderStyled = styled.header`
  top: 0;
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  box-sizing: border-box;
  z-index: 99;
  background-color: white;
`;

const TopPanel = ({ device = "mobile" }: TopPanelProps) => {
  const { ROUTE_WEB } = routerConstantClass;
  const { displayName } = getAuth().currentUser || ({} as User);
  const location = window.location;
  const [isTouchMenuOpen, setTouchMenuOpen] = useState(false);
  const [scrollState, setScrollState] = useState(false);
  const [isContactOpen, setContactOpen] = useState(false);
  const userStatus = useAppSelector(selectUserStatus);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
  });

  useEffect(() => {
    // TODO If route locaiton is change, all body scroll locks are disable, should solve bugs when redirecting
    clearAllBodyScrollLocks();
  }, [location]);

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
    <HeaderStyled>
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
          width="100%"
          maxWidth="1100px"
          margin="auto"
        >
          <GatsbyLink to="/">
            <Logo width={["120px", "150px"]} />
          </GatsbyLink>
          <Spacer />
          <Spacer />
          {device !== "desktop" ? (
            <>
              <IconButton
                aria-label="Menu button"
                icon={<FiMenu size={25} color="mono.400" />}
                onClick={toggleMobileMenu}
              />
            </>
          ) : (
            <>
              <HStack
                aria-label="desktop-navigation"
                as="nav"
                fontWeight="600"
                spacing={14}
              >
                <Link as={GatsbyLink} to="/">
                  Home
                </Link>
                <Link as={GatsbyLink} to={ROUTE_WEB.ABOUT_PAGE}>
                  About
                </Link>
                <Link as={GatsbyLink} to={ROUTE_WEB.TERMS_POLICY_PAGE}>
                  Terms
                </Link>
                <Link onClick={openModalContact}>Contact</Link>
              </HStack>
              <Spacer />
              <UserAvatar name={displayName} status={userStatus} />
            </>
          )}
        </Flex>
      </Box>
      {device === "mobile" && <MobileMenu isOpen={isTouchMenuOpen} />}
      {device === "tablet" && (
        <TabletMenu
          isOpen={isTouchMenuOpen}
          onClose={() => setTouchMenuOpen(false)}
        />
      )}
      <ModalContact
        isOpen={isContactOpen}
        onClose={closeModalContact}
        onOpen={openModalContact}
      />
    </HeaderStyled>
  );
};

export interface TopPanelProps {
  device?: "mobile" | "tablet" | "desktop";
}

export default TopPanel;
