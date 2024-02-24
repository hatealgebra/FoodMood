import { HStack } from '@chakra-ui/react';
import { StoryFn as Story } from '@storybook/react';
import DayButton, { DayButtonProps } from './DayButton';

const Template: Story<DayButtonProps> = (args) => <DayButton {...args} />;

export const DayButtonExample = Template.bind({});
DayButtonExample.args = {
  number: 1,
  isActive: true,
};

export default {
  component: DayButton,
  title: 'Atoms/DayButton',
};
