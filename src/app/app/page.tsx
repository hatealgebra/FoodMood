"use client";
import { useEffect } from "react";

import { Box, Center, Stack } from "@chakra-ui/react";
import AppSection from "~molecules/appSection/AppSection";

import RecipeCardRow from "~organisms/recipeCardRow/RecipeCardRow";
import AlertBox from "~atoms/alertBox/AlertBox";
import { useAppDispatch, useAppSelector } from "~store/hooks";
import { fetchRecipes } from "~store/thunks/edamamRecipe.thunk";
import {
  selectRandomRecipes,
  selectRandomRecipesError,
  selectRandomRecipesStatus,
} from "~store/slices/randomRecipes.slice";
import useFavouriteRecipes from "~hooks/useFavouriteRecipes";

const AppHomepage = () => {
  const randomRecipes = useAppSelector(selectRandomRecipes);
  const randomRecipesStatus = useAppSelector(selectRandomRecipesStatus);
  const randomRecipesError = useAppSelector(selectRandomRecipesError);
  const dispatch = useAppDispatch();
  const { savedRecipes, savedRecipesStatus, savedRecipesError } =
    useFavouriteRecipes();

  useEffect(() => {
    dispatch(fetchRecipes("pizza"));
  }, [dispatch]);

  return (
    <>
      <AppSection headingOne="Your daily" headingTwo="recipes" fullWidth>
        <RecipeCardRow
          isLoading={randomRecipesStatus === "loading" ? true : false}
          recipes={randomRecipes}
          error={randomRecipesError}
        />
      </AppSection>
      <AppSection></AppSection>
      <AppSection
        headingOne="My"
        headingTwo="Favourites"
        border="5px solid red"
        fullWidth
      >
        <RecipeCardRow
          isLoading={savedRecipesStatus === "loading" ? true : false}
          recipes={savedRecipes}
          error={savedRecipesError}
        />
      </AppSection>
      <AppSection headingOne="Today's meal" headingTwo="plan">
        <AlertBox status="info">Work in progress</AlertBox>
        {/* <Stack direction={{ base: "column", sm: "row" }} spacing={15}>
          <DishPlan dish="breakfast" img={pumpkinSoup} mealName="Pumkin soup" />
          <DishPlan dish="lunch" img={pumpkinSoup} mealName="Pumkin soup" />
          <DishPlan dish="dinner" img={pumpkinSoup} mealName="Pumkin soup" />
        </Stack> */}
      </AppSection>
    </>
  );
};

export default AppHomepage;
