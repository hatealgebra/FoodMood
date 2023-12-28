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
import {
  selectSavedRecipes,
  selectSavedRecipesStatus,
  selectSavedRecipesError,
} from "~store/slices/savedRecipes.slice";

const AppHomepage = () => {
  const randomRecipes = useAppSelector(selectRandomRecipes);
  const randomRecipesStatus = useAppSelector(selectRandomRecipesStatus);
  const randomRecipesError = useAppSelector(selectRandomRecipesError);
  const savedRecipes = useAppSelector(selectSavedRecipes) || [];
  const savedRecipesStatus = useAppSelector(selectSavedRecipesStatus);
  const savedRecipesError = useAppSelector(selectSavedRecipesError);
  const dispatch = useAppDispatch();

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
          maxW="100vw"
        />
      </AppSection>
      <Stack direction={{ base: "column", lg: "row" }} width="100%">
        <AppSection headingOne="Today's meal" headingTwo="plan">
          <Center>
            <AlertBox status="info">Work in progress</AlertBox>
          </Center>
          {/* <Stack direction={{ base: "column", sm: "row" }} spacing={15}>
          <DishPlan dish="breakfast" img={pumpkinSoup} mealName="Pumkin soup" />
          <DishPlan dish="lunch" img={pumpkinSoup} mealName="Pumkin soup" />
          <DishPlan dish="dinner" img={pumpkinSoup} mealName="Pumkin soup" />
        </Stack> */}
        </AppSection>
        <AppSection headingOne="My" headingTwo="Favourites">
          <RecipeCardRow
            isLoading={savedRecipesStatus === "loading" ? true : false}
            recipes={savedRecipes}
            error={savedRecipesError}
          />
        </AppSection>
      </Stack>
    </>
  );
};

export default AppHomepage;
