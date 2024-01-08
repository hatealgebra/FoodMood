import React from "react";

import { SimpleGrid, Text, Wrap } from "@chakra-ui/react";

import ScrollableRow from "~molecules/scrollableRow/ScrollableRow";

import RecipeCardGroup, { RecipeCardGroupProps } from "./RecipeCardsGroup";

interface RecipeCardRowProps extends RecipeCardGroupProps {
  leftPadding?: boolean;
  noPadding?: boolean;
}

const RecipeCardRow = ({
  isLoading,
  recipes,
  error = undefined,
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
        templateRows={error ? "1fr" : "auto auto"}
        w={["100%", "fit-content"]}
        justifyItems={["center", "flex-start"]}
        spacingX="6"
        spacingY="2"
        height="fit-content"
      >
        <RecipeCardGroup
          error={error}
          isLoading={isLoading}
          recipes={recipes}
        />
      </SimpleGrid>
    </ScrollableRow>
  );
};

export default RecipeCardRow;
