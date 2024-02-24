import DishPlan, { DishPlanProps } from './DishPlan';

import { Meta, StoryFn as Story } from '@storybook/react';
import pumpkinSoup from '../../../assets/images/presentation/pumpkin-soup.jpg';

const Template: Story<DishPlanProps> = (args: any) => <DishPlan {...args} />;

export const VariableDish = Template.bind({});
VariableDish.args = {
  dish: 'lunch',
  img: pumpkinSoup,
  mealName: 'Pumpkin Soup',
};

export default {
  component: DishPlan,
  title: 'Molecules/Dish Plan',
  decorators: [
    (Story: any) => (
      <div style={{ margin: '2em' }}>
        <Story />
      </div>
    ),
  ],
} as Meta;
