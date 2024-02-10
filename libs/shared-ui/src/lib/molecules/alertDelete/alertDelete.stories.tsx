import { action } from '@storybook/addon-actions';
import { Meta, StoryFn as Story } from '@storybook/react';
import AlertDelete, { AlertDeleteProps } from './AlertDelete';
import { expect, userEvent, waitFor, within } from '@storybook/test';

const Template: Story<AlertDeleteProps> = (args) => <AlertDelete {...args} />;

export const Alert = Template.bind({});
Alert.args = {
  action: action('Delete action was runned.'),
  heading: 'Alert delete heading',
  button: 'Delete action',
  children: 'Description of the action.',
};

export default {
  component: AlertDelete,
  title: 'Molecules/Alert Delete',
} as Meta<typeof AlertDelete>;
