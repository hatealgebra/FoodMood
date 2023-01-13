import React from "react";

import { SimpleGrid, Text } from "@chakra-ui/react";

import RecipeCard from "../../molecules/recipeCard/RecipeCard";
import ScrollableRow from "../../molecules/scrollableRow/ScrollableRow";
import { recipeRowOrigin } from "../../../utils/firebase.utils";
import Recipe from "../../../types/recipe.types";
import AlertBox from "../../atoms/alertBox/AlertBox";
import { FetchRecipesError } from "../../../types/async.types";

const RecipeCardRow = ({
  isLoading,
  recipes,
  error = null,
}: RecipeCardRowProps) => {
  console.log(recipes);
  return (
    <ScrollableRow>
      <SimpleGrid
        templateRows={error ? "1fr" : "1fr 1fr"}
        spacingX="6"
        spacingY="2"
        sx={{
          ".recipe-card:nth-of-type(1n)": { gridRow: "1/2" },
          ".recipe-card:nth-of-type(2n)": { gridRow: "2/3" },
        }}
      >
        {isLoading ? (
          [...Array(20)].map((_, i) => (
            <RecipeCard img={null} key={i} isLoading allData={undefined} />
          ))
        ) : error ? (
          <AlertBox status="error" title={error.name}>
            {error.message}
          </AlertBox>
        ) : recipes === undefined || recipes.length === 0 ? (
          <Text
            textAlign="center"
            fontSize="xl"
            fontWeight="500"
            color="mono.400"
          >
            No recipes to show.
          </Text>
        ) : (
          recipeRowOrigin(recipes).map(({ recipe }, i) => {
            const { cuisineType, label, totalTime, dishType, mealType, image } =
              recipe as Recipe;
            return (
              <RecipeCard
                key={label + i}
                img={image}
                tags={[cuisineType[0], dishType[0], mealType[0]]}
                heading={label}
                prepareTime={totalTime}
                allData={recipe}
              />
            );
          })
        )}
      </SimpleGrid>
    </ScrollableRow>
  );
};

interface RecipeCardRowProps {
  isLoading: boolean;
  recipes: Array<any>;
  error?: FetchRecipesError | null;
}

export default RecipeCardRow;
