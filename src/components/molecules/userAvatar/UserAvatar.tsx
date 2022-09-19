import React from "react";

import { Link as GatsbyLink, navigate } from "gatsby";

import {
  Avatar,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Spinner,
} from "@chakra-ui/react";
import { signOutUser } from "../../../store/thunks/authentication.thunks";
import * as myConstClass from "../../../utils/constants/router.constants";
import { useAppDispatch } from "../../../store/hooks";

const UserAvatar = ({
  name,
  photoURL,
  status,
  size = "sm",
}: UserAvatarProps) => {
  const dispatch = useAppDispatch();

  const signOut = () => {
    dispatch(signOutUser(null));
    navigate(myConstClass.ROUTE_WEB.LOGIN_PAGE);
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
            <MenuItem>
              <GatsbyLink to={myConstClass.ROUTE_APP.APP_USER_PAGE}>
                Settings
              </GatsbyLink>
            </MenuItem>
            <MenuDivider />
            <MenuItem onClick={signOut}>Sign out</MenuItem>
          </>
        ) : (
          <MenuItem as={GatsbyLink} to={myConstClass.ROUTE_WEB.LOGIN_PAGE}>
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
