import React from "react";

import RecipeCard from "./RecipeCard";
import pumpkinSoup from "../../../assets/images/presentation/pumpkin-soup.jpg";

export const PumpkinRecipe = () => (
  <RecipeCard
    img={pumpkinSoup}
    tags={["Japanes", "Soup", "Lunch/Dinner"]}
    heading="Pumpkin Soup"
    prepareTime={80}
    allData={{}}
  />
);

export const LoadingRecipe = () => (
  <RecipeCard img={null} isLoading allData={{}} />
);

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
