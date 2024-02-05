import { Tooltip, TooltipProps } from '@chakra-ui/react';
import { Meta, Story } from '@storybook/react';

const Template: Story<TooltipProps> = (args) => <Tooltip {...args} />;

export const GenericTooltip = Template.bind({});
GenericTooltip.args = {
  children: 'Get info',
  label: 'This is tooltip',
};

export default {
  component: Tooltip,
  title: 'Atoms/Tooltip',
} as Meta;
