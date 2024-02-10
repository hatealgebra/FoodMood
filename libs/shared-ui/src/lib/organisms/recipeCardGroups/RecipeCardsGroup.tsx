import { Text } from '@chakra-ui/react';
// import { FetchRecipesError } from '~types/async.types';
// import Recipe from '~types/recipe.types';
// import { recipeRowOrigin } from '~utils.firebase.utils';
import RecipeCard from '../../molecules/recipeCard/RecipeCard';
import AlertBox from '../../atoms/alertBox/AlertBox';

export interface RecipeCardGroupProps {
  isLoading: boolean;
  recipes: any;
  // error: FetchRecipesError | undefined;
}

const RecipeCardGroup = ({
  isLoading,
  recipes,
  error,
}: RecipeCardGroupProps) => {
  return (
    <>
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
        <></>
        // recipeRowOrigin(recipes).map((recipe, i) => {
        //   const { cuisineType, label, totalTime, dishType, mealType, image } =
        //     recipe as Recipe;
        //   return (
        //     <RecipeCard
        //       key={label + i}
        //       imageSource={image}
        //       tags={[cuisineType[0], dishType[0], mealType[0]]}
        //       heading={label}
        //       prepareTime={totalTime}
        //       allData={recipe}
        //       isLoading={isLoading}
        //     />
        //   );
        // })
      )}
    </>
  );
};

export default RecipeCardGroup;
