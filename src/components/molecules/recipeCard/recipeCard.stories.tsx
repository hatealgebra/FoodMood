import React from "react";

import RecipeCard from "./RecipeCard";
import pumpkinSoup from "~assets/images/presentation/pumpkin-soup.jpg";

const Template = (args: any) => <RecipeCard {...args} />;

export const PumpkinRecipe = Template.bind({});
PumpkinRecipe.args = {
  img: pumpkinSoup,
  tags: ["Japanes", "Soup", "Lunch/Dinner"],
  heading: "Pumpkin Soup",
  prepareTime: 80,
  allData: {},
};

export const LoadingRecipe = Template.bind({});
LoadingRecipe.args = {
  isLoading: true,
};

export default {
  component: RecipeCard,
  title: "Molecules/Recipe card",
  decorators: [
    (Story: any) => (
      <div style={{ margin: "4em" }}>
        <Story />
      </div>
    ),
  ],
};
