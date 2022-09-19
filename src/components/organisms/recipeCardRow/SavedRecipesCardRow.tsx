import React from "react";

import { Button, Center, Wrap } from "@chakra-ui/react";

import { useAppSelector } from "../../../store/hooks";
import { sortRecipes } from "../../../store/slices/searchedRecipesSlice";
import useSortRecipes from "../../../utils/hooks/useSortRecipes";
import {
  selectSavedRecipes,
  selectSavedRecipesError,
  selectSavedRecipesStatus,
} from "../../../store/slices/savedRecipes.slice";

import AppSection from "../../molecules/appSection/AppSection";
import Dropdown from "../../molecules/dropdown/Dropdown";
import RecipeCardRow from "./RecipeCardRow";

const SavedRecipesCardRow = ({ className }: SavedRecipesRowProps) => {
  const savedRecipeStatus = useAppSelector(selectSavedRecipesStatus);
  const savedRecipes = useAppSelector(selectSavedRecipes);
  const saveRecipesError = useAppSelector(selectSavedRecipesError);
  const [sortBy, setSortBy] = useSortRecipes(savedRecipes, sortRecipes);
  return (
    <AppSection headingOne="saved" headingTwo="recipes" secondary>
      <Dropdown
        sortBy={sortBy}
        setSortBy={setSortBy}
        buttonText="sort by"
        sort
      />
      <Wrap>
        <RecipeCardRow
          isLoading={savedRecipeStatus === "loading" ? true : false}
          recipes={savedRecipes}
        />
      </Wrap>
    </AppSection>
  );
};

interface SavedRecipesRowProps {
  className?: string;
}

export default SavedRecipesCardRow;
