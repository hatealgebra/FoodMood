import { VStack } from '@chakra-ui/react';
import FormikInput, { FormikInputProps } from './FormikInput';
import TextField from './FormikInput';
import { BsSearch } from 'react-icons/bs';
import { StoryFn as Story } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';

const Template: Story<FormikInputProps> = (args: any) => (
  <FormikInput {...args} />
);

export const VariableInput = Template.bind({});
VariableInput.args = {
  id: 'justSomeID',
  placeholder: '',
  label: '',
};
VariableInput.argTypes = {
  type: {
    defaultValue: 'text',
    control: {
      options: ['password', 'email', 'text'],
      type: 'inline-radio',
    },
  },
};
VariableInput.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const input = canvas.getByRole('textbox');
  await userEvent.type(input, 'Prague');
  expect(input).toHaveValue('Prague');
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
  title: 'Atoms/Input',
};
