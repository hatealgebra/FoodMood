import React from "react";
import { Meta, Story } from "@storybook/react";
import RadioBtnGroup, { RadioBtnsProps } from "./RadioBtn";

const Template: Story<RadioBtnsProps> = (args: any) => (
  <RadioBtnGroup {...args} />
);

export const RadioButtons = Template.bind({});
RadioButtons.args = {
  radioValues: [
    ["1", "first"],
    ["2", "second"],
    ["3", "third"],
  ],
};
RadioButtons.argTypes = {
  direction: {
    defaultValue: "column",
    control: { type: "radio", options: ["column", "row"] },
  },
};

export default {
  component: RadioBtnGroup,
  title: "Atoms/Radio",
} as Meta;
