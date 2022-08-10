import React from "react";
import AppNavbar from "./AppNavbar";

// * Selection of the menu item is bugged in storybook, in normal app
// *  the selection is functionale and the white color is on the starting link
export const ApplicationNavbar = () => <AppNavbar />;

export default {
  component: AppNavbar,
  title: "Molecules/App Navbar",
};
