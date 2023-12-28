import React from "react";

import {
  Avatar,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Spinner,
} from "@chakra-ui/react";
import * as myConstClass from "~constants/router.constants";
import { useAppDispatch } from "~store/hooks";
import { signOutUser } from "~store/thunks/authentication.thunks";
import NextLink from "next/link";

const UserAvatar = ({
  name,
  photoURL,
  status,
  size = "sm",
}: UserAvatarProps) => {
  const dispatch = useAppDispatch();

  const signOut = () => {
    dispatch(signOutUser(null));
  };

  return (
    <Menu isLazy>
      <MenuButton position="relative">
        {status !== "loading" ? (
          <Avatar size={size} name={name || undefined} src={photoURL}></Avatar>
        ) : (
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        )}
      </MenuButton>
      <MenuList>
        {name ? (
          <>
            <MenuItem as={NextLink} href={myConstClass.ROUTE_APP.APP_USER_PAGE}>
              Settings
            </MenuItem>
            <MenuDivider />
            <MenuItem onClick={signOut}>Sign out</MenuItem>
          </>
        ) : (
          <MenuItem as={NextLink} href={myConstClass.ROUTE_WEB.LOGIN_PAGE}>
            Sign In
          </MenuItem>
        )}
      </MenuList>
    </Menu>
  );
};

export interface UserAvatarProps {
  name: string | null;
  photoURL?: string;
  status: "idle" | "loading";
  size?: "sm" | "md";
}

export default UserAvatar;
