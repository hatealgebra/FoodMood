import React from 'react';

import { action, actions } from '@storybook/addon-actions';

import { FcGoogle } from 'react-icons/fc';
import { Button, ButtonProps, Wrap } from '@chakra-ui/react';
import SaveButton, { SaveButtonProps } from './SaveButton';
import { Story, Meta } from '@storybook/react';

const Template: Story<ButtonProps> = (args) => <Button {...args} />;
const TemplateSaveButton: Story<SaveButtonProps> = (args) => (
  <Button {...args} />
);

export const GenericButton = Template.bind({});
GenericButton.args = {
  children: 'Button',
  isLoading: false,
  colorScheme: 'primary',
};
GenericButton.argTypes = {
  colorScheme: {
    control: {
      type: 'radio',
      options: ['primary', 'secondary', 'tertiary', 'warning'],
    },
  },
};

export const AllColors = () => (
  <>
    <Button colorScheme="primary">Primary</Button>
    <Button colorScheme="secondary">Secondary</Button>
    <Button colorScheme="tertiary">Tertiary</Button>
    <Button colorScheme="warning">Warning</Button>
  </>
);

export const AllVariants = () => (
  <>
    <Button variant="ghost">Ghost</Button>
    <Button variant="solid">Solid</Button>
    <Button variant="outline">Outline</Button>
    <Button variant="link" colorScheme="secondary">
      Link
    </Button>
  </>
);

export const AllSizes = () => (
  <>
    <Button size="lg" colorScheme="primary">
      Large
    </Button>
    <Button size="xl" colorScheme="primary">
      Extra large
    </Button>
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

export const SpecialButtons = () => (
  <>
    <Button leftIcon={<FcGoogle />} variant="outline">
      Sign In with Google
    </Button>
    <SaveButton savedStatus={true} onClick={() => action('saved')}>
      Save
    </SaveButton>
  </>
);

export default {
  component: Button,
  title: 'Atoms/Button',
  decorators: [
    (Story: any) => (
      <Wrap>
        <Story />
      </Wrap>
    ),
  ],
} as Meta;
