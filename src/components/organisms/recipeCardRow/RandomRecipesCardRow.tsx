import { Button, Center, VStack } from "@chakra-ui/react";
import React from "react";
import { getMoreRecipes } from "../../../services/api/endpoints";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { selectRandomRecipes } from "../../../store/slices/randomRecipes.slice";
import {
  getRandomRecipes,
  showMoreRecipes,
} from "../../../store/thunks/edamamRecipe.thunk";
import { FetchingRecipes } from "../../../types/async.types";
import AppSection from "../../molecules/appSection/AppSection";
import ModalRecipe from "../modalRecipe/ModalRecipe";
import RecipeCardRow from "./RecipeCardRow";

const foodNames = [
  "pizza",
  "fries",
  "hamburger",
  "salad",
  "pasta",
  "lasagne",
  "soup",
];

const RandomRecipesCardRow = ({ className }: RandomRecipesCardRowProps) => {
  const recipes = useAppSelector(selectRandomRecipes);
  const dispatch = useAppDispatch();

  const showNextRecipes = (recipes: FetchingRecipes[]) => {
    const { data } = recipes[recipes.length - 1];
    return dispatch(showMoreRecipes(data._links.next.href));
  };
  const getFoodName = (foodData: typeof foodNames) => {
    const randomIndex = Math.floor(Math.random() * foodData.length);
    return getRandomRecipes(foodData[randomIndex]);
  };

  React.useEffect(() => {
    if (recipes.length === 0) {
      dispatch(getFoodName(foodNames));
    }
  }, [dispatch, recipes]);

  return (
    <>
      <AppSection headingOne="Your daily" headingTwo="recipes">
        {recipes.map((recipeData, i) => {
          const { status, data, error } = recipeData;
          return (
            <RecipeCardRow
              key={`Recipe Card Row ${i}`}
              isLoading={status === "loading" ? true : false}
              recipes={data.hits}
              error={error}
            />
          );
        })}
        <Center width="100%">
          <Button
            onClick={() => showNextRecipes(recipes)}
            colorScheme="primary"
            my="30px"
          >
            Show More
          </Button>
        </Center>
      </AppSection>
      <ModalRecipe />
    </>
  );
};

interface RandomRecipesCardRowProps {
  className?: string;
}

export default RandomRecipesCardRow;
