"use client";
import React from "react";

import { Button, Center, Wrap } from "@chakra-ui/react";

import AppSection from "~molecules/appSection/AppSection";
import Dropdown from "~molecules/dropdown/Dropdown";
import useSortRecipes from "~hooks/useSortRecipes";
import { sortRecipes } from "~store/slices/searchedRecipesSlice";
import useFavouriteRecipes from "~hooks/useFavouriteRecipes";
import RecipeCardsGallery from "~organisms/RecipeCardsGallery";

const SavedRecipesPage = () => {
  const { savedRecipes, savedRecipesStatus, savedRecipesError } =
    useFavouriteRecipes();
  const [sortBy, setSortBy] = useSortRecipes(savedRecipes, sortRecipes);

  return (
    <>
      <AppSection headingOne="favourite" headingTwo="recipes" secondary>
        <Dropdown
          sortBy={sortBy}
          setSortBy={setSortBy}
          buttonText="sort by"
          sort
        />
        <RecipeCardsGallery
          isLoading={savedRecipesStatus === "loading" ? true : false}
          recipes={savedRecipes}
          error={savedRecipesError}
          noPadding
        />
      </AppSection>
    </>
  );
};

export default SavedRecipesPage;
