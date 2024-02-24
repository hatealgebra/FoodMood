'use client';
import {
  fetchRecipes,
  selectRandomRecipes,
  selectRandomRecipesError,
  selectRandomRecipesStatus,
  useAppDispatch,
  useAppSelector,
  useFavouriteRecipes,
} from 'data-access-app-redux';

import { useEffect } from 'react';
import {
  AlertBox,
  AppSection,
  PreferencesBanner,
  RecipeCardsGallery,
  RecipeCardsScrollable,
  SearchBanner,
} from 'ui-shared';

const AppHomepage = () => {
  const randomRecipes = useAppSelector(selectRandomRecipes);
  const randomRecipesStatus = useAppSelector(selectRandomRecipesStatus);
  const randomRecipesError = useAppSelector(selectRandomRecipesError);
  const dispatch = useAppDispatch();
  const { savedRecipes, savedRecipesStatus, savedRecipesError } =
    useFavouriteRecipes();

  useEffect(() => {
    dispatch(fetchRecipes('pizza'));
  }, [dispatch]);

  return (
    <>
      <AppSection headingOne="Your daily" headingTwo="recipes" fullWidth>
        <RecipeCardsScrollable
          isLoading={randomRecipesStatus === 'loading' ? true : false}
          recipes={randomRecipes}
          error={randomRecipesError}
        />
      </AppSection>
      <AppSection hideHeading>
        <SearchBanner
          heading="The Search is On:"
          paragraph="Ready to elevate your cooking game? Click below and start your search now!"
          buttonText="Start searching"
          padding="150px"
          size="sm"
          backgroundColor="primary.200"
        />
      </AppSection>
      {/* FIXME: It should be 3 columns from some viewport */}
      <AppSection
        headingOne="My"
        headingTwo="Favourites"
        border="5px solid red"
        fullWidth
      >
        <RecipeCardsGallery
          isLoading={savedRecipesStatus === 'loading' ? true : false}
          recipes={savedRecipes}
          error={savedRecipesError}
        />
      </AppSection>
      <AppSection hideHeading>
        <PreferencesBanner
          heading="Craft Your Culinary Journey"
          paragraph="Indulge in a world of flavors that match your preferences. From savory classics to innovative delights, your customized food adventure starts here."
          buttonText="Get Started Button"
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
