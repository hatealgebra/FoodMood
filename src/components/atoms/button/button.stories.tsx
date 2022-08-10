import React from "react";

import { action, actions } from "@storybook/addon-actions";

import { FcGoogle } from "react-icons/fc";
import { Button, ButtonProps, Wrap } from "@chakra-ui/react";
import SaveButton, { SaveButtonProps } from "./SaveButton";
import { Story, Meta } from "@storybook/react";

const Template: Story<ButtonProps> = (args) => <Button {...args} />;
const TemplateSaveButton: Story<SaveButtonProps> = (args) => (
  <Button {...args} />
);

export const GenericButton = Template.bind({});
GenericButton.args = {
  children: "Button",
  isLoading: false,
  size: "md",
};
GenericButton.argTypes = {
  colorScheme: {
    control: {
      type: "radio",
      options: ["primary", "secondary", "tertiary", "warning"],
    },
  },
};

export const AllButtons = () => (
  <>
    <Button colorScheme="primary">Primary</Button>
    <Button colorScheme="secondary">Secondary</Button>
    <Button colorscheme="tertiary">Tertiary</Button>
    <Button colorScheme="warning">Warning</Button>
    <Button leftIcon={<FcGoogle />} variant="outline">
      Sign In
    </Button>
    <SaveButton savedStatus={true} onClick={() => action("saved")}>
      Save
    </SaveButton>
  </>
);

export const ButtonVariants = () => (
  <>
    <Button variant="ghost">Ghost</Button>
    <Button variant="solid">Solid</Button>
    <Button variant="outline">Outline</Button>
    <Button variant="link">Link</Button>
  </>
);

export const ButtonSize = () => (
  <>
    <Button size="sm">Small</Button>
    <Button size="md">Medium</Button>
    <Button size="lg">Large</Button>
  </>
);

export const LoadingButtons = () => (
  <>
    <Button isLoading>Primary</Button>
    <Button isLoading variant="secondary">
      secondary
    </Button>
    <Button isLoading variant="tertiary">
      tertiary
    </Button>
    <Button isLoading leftIcon={<FcGoogle />} variant="gray">
      Sign In
    </Button>
    <Button isLoading variant="select" />
  </>
);

export const GenericSaveButton = TemplateSaveButton.bind({});
GenericSaveButton.args = {
  savedStatus: true,
  isLoading: true,
  isFullWidth: false,
  onClick: () => action("Save btn clicked"),
};

export default {
  component: Button,
  title: "Atoms/Button",
  decorators: [
    (Story: any) => (
      <Wrap>
        <Story />
      </Wrap>
    ),
  ],
} as Meta;
