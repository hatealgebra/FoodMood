import { Story } from "@storybook/react";
import React from "react";
import ToggleBtn, { ToggleBtnProps } from "./ToggleBtn";

const Template: Story<ToggleBtnProps> = (args: any) => <ToggleBtn {...args} />;

export const ToggleButton = Template.bind({});

ToggleButton.args = {
  children: "label text",
  id: "switch-button",
  initialValue: false,
};

ToggleButton.argTypes = {
  direction: {
    control: {
      type: "radio",
      options: ["column", "row"],
    },
  },
};

export default {
  component: ToggleBtn,
  title: "Atoms/Toggle Button",
};
