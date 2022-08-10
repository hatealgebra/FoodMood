import React from "react";
import TabletMenu from "./TabletMenu";

export const TabletMenuExample = () => (
  <TabletMenu isOpen onClose={() => console.log("hi")} />
);

export default {
  component: TabletMenu,
  title: "Molecules/Tablet Menu",
};
