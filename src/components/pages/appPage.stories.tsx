import React from 'react';

import UserPage from './userPage/UserPage';

import { SetUserData } from '~helpers/storybook.helpers';
import ModalRecipe from '../../../libs/shared-ui/src/lib/organisms/modalRecipe/ModalRecipe';
import AppHomepage from '~app/app/page';
import SearchPage from '~app/app/search/page';
import SavedRecipesPage from '~app/app/favourites/page';
import MealPlanPage from './mealPlanPage/MealPlanPage';
import AppPage from '~app/app/layout';

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
  title: 'Pages/Application pages',
  parameters: {
    storyshots: { disable: true },
  },
};
