import React from "react";

import AppPage from "../../components/templates/appPage/AppPage.template";

import SavedRecipesRow from "../../components/organisms/recipeCardRow/SavedRecipesCardRow";

const SavedRecipesPage = () => {
  return (
    <AppPage>
      <SavedRecipesRow />
    </AppPage>
  );
};

export default SavedRecipesPage;
