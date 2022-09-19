import React from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  selectRandomRecipes,
  selectRandomRecipesError,
  selectRandomRecipesStatus,
} from "../../store/slices/randomRecipes.slice";
import { getRandomRecipes } from "../../store/thunks/edamamRecipe.thunk";

function useRandomRecipes() {
  const recipes = useAppSelector(selectRandomRecipes);
  const status = useAppSelector(selectRandomRecipesStatus);
  const error = useAppSelector(selectRandomRecipesError);
  const dispatch = useAppDispatch();

  const getFoodName = (foodData: typeof foodNames) => {
    const randomIndex = Math.floor(Math.random() * foodData.length);
    return getRandomRecipes(foodData[randomIndex]);
  };

  React.useEffect(() => {
    dispatch(getFoodName(foodNames));
  }, [dispatch]);

  return [recipes, status, error];
}

export default useRandomRecipes;
