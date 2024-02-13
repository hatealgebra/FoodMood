import { StoryFn as Story } from '@storybook/react';
import Dropdown, { DropdownProps } from './Dropdown';
import { expect, fn, spyOn, userEvent, within } from '@storybook/test';
import { action } from '@storybook/addon-actions';

const Template: Story<DropdownProps> = (args) => <Dropdown {...args} />;

export const SortDropdown = Template.bind({});
SortDropdown.args = {
  sortBy: 'cals-asc',
  buttonText: 'Sort by',
  sort: true,
};

SortDropdown.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);

  const openDropdownBtn = canvas.getByRole('button', { name: /sort by/i });
  await userEvent.click(openDropdownBtn);

  const caloriesToLowOption = canvas.getByText('Calories: High To Low');
  await userEvent.click(caloriesToLowOption);

  expect(args.setSortBy).toBeCalled();
};

export const ClassicDropdown = Template.bind({});
ClassicDropdown.args = {
  sortBy: 'high',
  buttonText: "Drop it like it's hot",
};

export default {
  component: Dropdown,
  title: 'Molecules/Dropdown',
  argTypes: {
    setSortBy: {
      action,
    },
  },
};
