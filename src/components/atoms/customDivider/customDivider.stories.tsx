import { Story } from "@storybook/react";
import React from "react";
import CustomDivider, { CustomDividerProps } from "./CustomDivider";

const Template: Story<CustomDividerProps> = (args: any) => (
  <CustomDivider {...args} />
);

export const Divider = Template.bind({});
Divider.args = {
  children: "Divider",
  width: "300px",
};

export default {
  component: CustomDivider,
  title: "Atoms/Custom divider",
};
