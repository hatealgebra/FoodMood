import { StoryFn as Story } from '@storybook/react';
import ToggleBtn, { ToggleBtnProps } from './ToggleBtn';
import { userEvent, within } from '@storybook/test';
import { expect } from 'chai';

const Template: Story<ToggleBtnProps> = (args: any) => <ToggleBtn {...args} />;

export const ToggleButton = Template.bind({});

ToggleButton.args = {
  children: 'label text',
  id: 'switch-button',
  initialValue: false,
};
ToggleButton.argTypes = {
  direction: {
    control: {
      type: 'radio',
      options: ['column', 'row'],
    },
  },
};
ToggleButton.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const switchBtn = canvas.getByRole('checkbox');

  await userEvent.click(switchBtn);
  expect(switchBtn).to.have.property('checked', true);

  await userEvent.click(switchBtn);
  expect(switchBtn).to.have.property('checked', false);
};

export default {
  component: ToggleBtn,
  title: 'Atoms/Toggle Button',
};
