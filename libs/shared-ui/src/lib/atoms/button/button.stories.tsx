import { FcGoogle } from 'react-icons/fc';
import { Button, ButtonProps, Wrap } from '@chakra-ui/react';
import SaveButton, { SaveButtonProps } from './SaveButton';
import { Meta, StoryFn as Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { expect, userEvent, within } from '@storybook/test';

const Template: Story<ButtonProps> = (args) => <Button {...args} />;
const TemplateSaveButton: Story<SaveButtonProps> = (args) => (
  <Button {...args} />
);

export const GenericButton = Template.bind({});
GenericButton.args = {
  children: 'Button',
  isLoading: false,
  colorScheme: 'primary',
  onClick: action('clicked'),
};
GenericButton.argTypes = {
  colorScheme: {
    control: {
      type: 'radio',
      options: ['primary', 'secondary', 'tertiary', 'warning'],
    },
  },
};
GenericButton.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);

  const button = canvas.getByRole('button');
  await userEvent.click(button);
  expect(args.onClick).toHaveBeenCalled();
};

export const AllColors = () => (
  <>
    <Button colorScheme="primary">Primary</Button>
    <Button colorScheme="secondary">Secondary</Button>
    <Button colorScheme="tertiary">Tertiary</Button>
    <Button colorScheme="warning">Warning</Button>
    <Button colorScheme="red">Red</Button>
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
    (Story: Story) => (
      <Wrap>
        <Story />
      </Wrap>
    ),
  ],
} as Meta<typeof Button>;
