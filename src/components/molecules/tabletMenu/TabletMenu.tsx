import React from "react";

import {
  Box,
  Center,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/react";
import { Link as GatsbyLink } from "gatsby";
import Logo from "../../atoms/logo/Logo";
import TouchMenuLinks from "../touchMenuLinks/TouchMenuLinks";
import { getAuth } from "firebase/auth";

import UserAvatar from "../userAvatar/UserAvatar";
import { useAppSelector } from "../../../store/hooks";
import { selectUserStatus } from "../../../store/slices/user.slice";

interface TabletMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const TabletMenu = ({ isOpen, onClose }: TabletMenuProps) => {
  const { currentUser } = getAuth();
  const userStatus = useAppSelector(selectUserStatus);
  return (
    <Drawer
      isOpen={isOpen}
      onClose={onClose}
      placement="left"
      size="xs"
      blockScrollOnMount={false}
    >
      <DrawerOverlay />
      <DrawerContent aria-label="tablet-drawer">
        <DrawerCloseButton onClick={onClose} />
        <DrawerHeader>
          <GatsbyLink to="/">
            <Logo width={["120px", "150px"]} />
          </GatsbyLink>
        </DrawerHeader>
        <DrawerBody>
          <TouchMenuLinks noMargin />
          <Box
            position="absolute"
            top="85px"
            gridArea="firstBox"
            zIndex={0}
            right="0"
            w="120px"
            height="50px"
            backgroundColor="mono.200"
            justifySelf="flex-end"
          />
          <Box
            position="absolute"
            left="0px"
            gridArea="secondBox"
            zIndex={0}
            w="55%"
            height="50px"
            mt="50px"
            backgroundColor="mono.200"
          />
        </DrawerBody>
        <DrawerFooter>
          <Center margin="auto">
            <UserAvatar
              name={currentUser?.displayName!}
              status={userStatus}
              size="md"
            />
          </Center>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default TabletMenu;
