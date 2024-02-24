import React from 'react';

import { Wrap } from '@chakra-ui/react';

import RecipeCardGroup, { RecipeCardGroupProps } from './RecipeCardsGroup';

interface RecipeCardsGallery extends RecipeCardGroupProps {
  leftPadding?: boolean;
  noPadding?: boolean;
}

const RecipeCardsGallery = ({
  isLoading,
  recipes,
  error = undefined,
  leftPadding = false,
  noPadding = false,
  ...props
}: RecipeCardsGallery) => {
  return (
    <Wrap
      maxW="100%"
      w="100%"
      spacingX="6"
      spacingY="2"
      height="fit-content"
      my={3}
      px={[0, 0, 0, !noPadding ? '10.5vw' : 0]}
    >
      <RecipeCardGroup error={error} isLoading={isLoading} recipes={recipes} />
    </Wrap>
  );
};

export default RecipeCardsGallery;
