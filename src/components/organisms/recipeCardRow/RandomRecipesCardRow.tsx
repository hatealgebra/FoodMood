import { Button, Center, VStack } from "@chakra-ui/react";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import {
  selectRandomRecipes,
  selectRandomShowNextLink,
} from "../../../store/slices/randomRecipes.slice";
import {
  getRandomRecipes,
  showMoreRecipes,
} from "../../../store/thunks/edamamRecipe.thunk";
import { FetchingRecipes } from "../../../types/async.types";
import AppSection from "../../molecules/appSection/AppSection";
import ShowMoreButton from "../../molecules/showMoreButton/ShowMoreButton";
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
  const showMoreLink = useAppSelector(selectRandomShowNextLink);
  const dispatch = useAppDispatch();

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
        <ShowMoreButton
          nextLink={showMoreLink}
          dispatchAction={showMoreRecipes}
        ></ShowMoreButton>
      </AppSection>
      <ModalRecipe />
    </>
  );
};

interface RandomRecipesCardRowProps {
  className?: string;
}

export default RandomRecipesCardRow;
