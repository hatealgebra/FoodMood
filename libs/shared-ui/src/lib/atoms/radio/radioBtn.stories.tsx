import { Meta, Story } from '@storybook/react';
import RadioBtnGroup, { RadioBtnsProps } from './RadioBtn';
import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const Template: Story<RadioBtnsProps> = (args: any) => (
  <RadioBtnGroup {...args} />
);

export const RadioButtons = Template.bind({});
RadioButtons.args = {
  radioValues: [
    ['1', 'first'],
    ['2', 'second'],
    ['3', 'third'],
    ['4', 'four'],
  ],
};
RadioButtons.argTypes = {
  direction: {
    defaultValue: 'column',
    control: { type: 'radio', options: ['column', 'row'] },
  },
};
RadioButtons.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const radios = canvas.getAllByRole('radio', { checked: false });
  const firstRadio = radios[0];

  await userEvent.click(firstRadio);
  await expect(firstRadio).toBeChecked();
};

export default {
  component: RadioBtnGroup,
  title: 'Atoms/Radio',
} as Meta;
