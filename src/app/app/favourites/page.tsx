"use client";
import React from "react";

import AppSection from "~molecules/appSection/AppSection";
import Dropdown from "~molecules/dropdown/Dropdown";
import useSortRecipes from "~hooks/useSortRecipes";

import useFavouriteRecipes from "~hooks/useFavouriteRecipes";
import RecipeCardsGallery from "~organisms/RecipeCardsGallery";
import { sortSavedRecipes } from "~store/slices/savedRecipes.slice";

const SavedRecipesPage = () => {
  const { savedRecipes, savedRecipesStatus, savedRecipesError } =
    useFavouriteRecipes();
  const [sortBy, setSortBy] = useSortRecipes(sortSavedRecipes);
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
