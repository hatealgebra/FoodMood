import React from "react";

import { Button, Center, Wrap } from "@chakra-ui/react";
import { useAppSelector } from "../../store/hooks";
import {
  selectSavedRecipes,
  selectSavedRecipesError,
  selectSavedRecipesStatus,
} from "../../store/slices/savedRecipes.slice";
import { sortRecipes } from "../../store/slices/searchedRecipesSlice";
import useSortRecipes from "../../utils/hooks/useSortRecipes";
import AppPage from "../../components/templates/appPage/AppPage.template";
import AppSection from "../../components/molecules/appSection/AppSection";
import Dropdown from "../../components/molecules/dropdown/Dropdown";
import RecipeCardRow from "../../components/organisms/recipeCardRow/RecipeCardRow";

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
