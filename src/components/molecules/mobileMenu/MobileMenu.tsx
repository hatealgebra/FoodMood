import React from "react";

import { Box, SimpleGrid, HStack, Center } from "@chakra-ui/react";

import TouchMenuLinks from "../touchMenuLinks/TouchMenuLinks";
import { getAuth } from "firebase/auth";
import UserAvatar from "../userAvatar/UserAvatar";
import { useAppSelector } from "../../../store/hooks";
import { selectUserStatus } from "../../../store/slices/user.slice";

// ! Body scroll doesnt toggle
const MobileMenu = ({ isOpen }: { isOpen: boolean }) => {
  const currentUser = getAuth().currentUser;
  const userStatus = useAppSelector(selectUserStatus);

  return (
    <SimpleGrid
      id="mobileMenu"
      as="nav"
      display={{ base: "grid", tablet: "none" }}
      aria-label="mobile-menu"
      position="fixed"
      height="100%"
      width="100%"
      opacity={isOpen ? 1 : 0}
      visibility={isOpen ? "visible" : "hidden"}
      backgroundColor="white"
      transition=".3s ease"
      templateAreas={`". ." "list firstBox" "secondBox ." ". ."`}
      templateRows=".4fr auto auto 2fr"
      rowGap="20px"
      alignItems="flex-start"
    >
      <TouchMenuLinks />
      <Box
        position="relative"
        top="20px"
        gridArea="firstBox"
        zIndex={0}
        right="0"
        w="120px"
        height="50px"
        backgroundColor="mono.200"
        justifySelf="flex-end"
      />
      <Box
        gridArea="secondBox"
        zIndex={0}
        w="80%"
        height="50px"
        mt="30px"
        backgroundColor="mono.200"
      />
      <HStack
        position="absolute"
        bottom={[0, 2]}
        left={0}
        right={0}
        width={{ base: "100%" }}
        maxW="400px"
        p="10px 20px"
      >
        <Center margin="auto">
          <UserAvatar
            name={currentUser?.displayName!}
            status={userStatus}
            size="md"
          />
        </Center>
      </HStack>
    </SimpleGrid>
  );
};

export default MobileMenu;
