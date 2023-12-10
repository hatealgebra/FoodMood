import React from "react";

import { Button, Center, Wrap } from "@chakra-ui/react";

import AppSection from "../../molecules/appSection/AppSection";
import Dropdown from "../../molecules/dropdown/Dropdown";
import AppPage from "../../templates/appPage/AppPage.template";
import RecipeCardRow from "../../organisms/recipeCardRow/RecipeCardRow";
import { useAppSelector } from "../../../store/hooks";
import {
  selectSavedRecipes,
  selectSavedRecipesError,
  selectSavedRecipesStatus,
} from "../../../store/slices/savedRecipes.slice";
import useSortRecipes from "~hooks/useSortRecipes";
import { sortRecipes } from "../../../store/slices/searchedRecipesSlice";

const SavedRecipesPage = () => {
  const savRecipesStatus = useAppSelector(selectSavedRecipesStatus);
  const savRecipes = useAppSelector(selectSavedRecipes);
  const saveRecipesError = useAppSelector(selectSavedRecipesError);
  const [sortBy, setSortBy] = useSortRecipes(savRecipes, sortRecipes);

  return (
    <AppPage>
      <AppSection headingOne="favourite" headingTwo="recipes" secondary>
        <Dropdown
          sortBy={sortBy}
          setSortBy={setSortBy}
          buttonText="sort by"
          sort
        />
        <Wrap>
          <RecipeCardRow
            isLoading={savRecipesStatus === "loading" ? true : false}
            recipes={savRecipes}
          />
        </Wrap>
      </AppSection>
      <Center width="100%">
        {savRecipesStatus === "loading" ||
        saveRecipesError ||
        savRecipes.length === 0 ? (
          ""
        ) : (
          <Button colorScheme="primary">Show more</Button>
        )}
      </Center>
    </AppPage>
  );
};

export default SavedRecipesPage;
