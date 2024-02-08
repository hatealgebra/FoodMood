import React from 'react';
import { Meta, Story } from '@storybook/react';

import AlertBox, { AlertBoxProps } from './AlertBox';
import { within } from '@storybook/testing-library';

const Template: Story<AlertBoxProps> = (args) => <AlertBox {...args} />;

export const BasicAlert = Template.bind({});
BasicAlert.args = {
  children: 'This is alert!',
};
BasicAlert.argTypes = {
  status: {
    control: {
      type: 'select',
      options: ['info', 'warning', 'success', 'error'],
    },
  },
};

export const AllAlerts = () => (
  <>
    <AlertBox status="info">The recipe is low carb</AlertBox>
    <AlertBox status="warning">The recipe will be deleted</AlertBox>
    <AlertBox status="success">The recipe was saved</AlertBox>
    <AlertBox status="error">The recipe was not saved!</AlertBox>
  </>
);

export default {
  component: AlertBox,
  title: 'Atoms/Alert',
} as Meta;
