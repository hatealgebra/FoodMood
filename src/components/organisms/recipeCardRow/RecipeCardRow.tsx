import React from "react";

import { SimpleGrid, Text } from "@chakra-ui/react";

import RecipeCard from "~molecules/recipeCard/RecipeCard";
import ScrollableRow from "~molecules/scrollableRow/ScrollableRow";

import Recipe from "~types/recipe.types";
import AlertBox from "~atoms/alertBox/AlertBox";
import { FetchRecipesError } from "~types/async.types";
import { recipeRowOrigin } from "~utils.firebase.utils";

const RecipeCardRow = ({
  isLoading,
  recipes,
  error = null,
  leftPadding = false,
  noPadding = false,
  ...props
}: RecipeCardRowProps) => {
  return (
    <ScrollableRow {...props}>
      <SimpleGrid
        px={[0, 0, 0, "10.5vw"]}
        pl={[0, 0, 0, !noPadding ? "10.5vw" : 0]}
        gridAutoFlow={["row", "column"]}
        templateRows={error ? "1fr" : "1fr 1fr"}
        w={["100%", "fit-content"]}
        justifyItems={["center", "flex-start"]}
        spacingX="6"
        spacingY="2"
      >
        {error ? (
          <AlertBox status="error" title={error.name}>
            {error.message}
          </AlertBox>
        ) : recipes.length === 0 || recipes === undefined ? (
          <Text
            textAlign="center"
            fontSize="xl"
            fontWeight="500"
            color="mono.400"
          >
            No saved recipes yet.
          </Text>
        ) : (
          recipeRowOrigin(recipes).map((recipe, i) => {
            const { cuisineType, label, totalTime, dishType, mealType, image } =
              recipe as Recipe;
            return (
              <RecipeCard
                key={label + i}
                imageSource={image}
                tags={[cuisineType[0], dishType[0], mealType[0]]}
                heading={label}
                prepareTime={totalTime}
                allData={recipe}
                isLoading={isLoading}
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
  leftPadding?: boolean;
  noPadding?: boolean;
}

export default RecipeCardRow;
