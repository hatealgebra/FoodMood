import {
  Checkbox,
  CheckboxGroup,
  CheckboxGroupProps,
  Stack,
} from "@chakra-ui/react";
import { Meta, Story } from "@storybook/react";
import React from "react";

const Template: Story<CheckboxGroupProps> = (args: object) => (
  <CheckboxGroup {...args} />
);

export const CheckButtons = Template.bind({});
CheckButtons.args = {
  defaultValue: ["second"],
  children: (
    <Stack direction="row">
      <Checkbox value="first">First</Checkbox>
      <Checkbox value="second">Second</Checkbox>
      <Checkbox value="third">Third</Checkbox>
    </Stack>
  ),
};

export default {
  component: CheckboxGroup,
  title: "Atoms/Checkbox",
} as Meta;
