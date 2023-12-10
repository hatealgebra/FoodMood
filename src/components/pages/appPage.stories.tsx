import React from "react";

import AppPage from "../templates/appPage/AppPage.template";
import AppHomepage from "./appHomepage/AppHomepage";
import MealPlanPage from "./mealPlanPage/MealPlanPage";
import SavedRecipesPage from "./savedRecipes/SavedRecipesPage";
import SearchPage from "./searchPage/SearchPage";

import UserPage from "./userPage/UserPage";

import { SetUserData } from "~helpers/storybook.helpers";
import ModalRecipe from "../organisms/modalRecipe/ModalRecipe";

export const UserSettings = () => (
  <SetUserData>
    <UserPage />
  </SetUserData>
);

export const Home = () => (
  <SetUserData>
    <AppHomepage />
    <ModalRecipe />
  </SetUserData>
);
export const Search = () => (
  <SetUserData>
    <SearchPage />
    <ModalRecipe />
  </SetUserData>
);
export const Favourites = () => (
  <SetUserData>
    <SavedRecipesPage />
    <ModalRecipe />
  </SetUserData>
);
export const MealPlan = () => (
  <SetUserData>
    <MealPlanPage />
  </SetUserData>
);

export default {
  component: AppPage,
  title: "Pages/Application pages",
  parameters: {
    storyshots: { disable: true },
  },
};
