import React from "react";

import { VStack } from "@chakra-ui/react";
import FormikInput, { FormikInputProps } from "./Input";
import TextField from "./Input";
import { BsSearch } from "react-icons/bs";
import { Story } from "@storybook/react";

const Template: Story<FormikInputProps> = (args: any) => (
  <FormikInput {...args} />
);

export const VariableInput = Template.bind({});
VariableInput.args = {
  id: "justSomeID",
  placeholder: "",
  label: "",
};
VariableInput.argTypes = {
  type: {
    defaultValue: "text",
    control: {
      options: ["password", "email", "text"],
      type: "inline-radio",
    },
  },
};

export const AllInputs = () => (
  <VStack spacing={5}>
    <FormikInput id="password" label="Password" type="password" />
    <FormikInput id="email" type="email" placeholder="Search for ..." />
    <FormikInput
      id="searchba"
      icon={<BsSearch />}
      type="email"
      placeholder="Type the text"
    />
  </VStack>
);

export default {
  component: TextField,
  title: "Atoms/Input",
};
