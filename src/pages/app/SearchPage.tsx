import React from "react";

import { Box, Text, Wrap } from "@chakra-ui/react";
import { Field, Form, Formik, FormikHelpers, FormikProps } from "formik";

import { BsSearch } from "react-icons/bs";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  selectSearchedRecipes,
  selectSearchedRecipesError,
  selectSearchedRecipesQuery,
  selectSearchedRecipesStatus,
  sortRecipes,
} from "../../store/slices/searchedRecipesSlice";
import useSortRecipes from "../../utils/hooks/useSortRecipes";
import { searchRecipesThunk } from "../../store/thunks/edamamRecipe.thunk";
import AppPage from "../../components/templates/appPage/AppPage.template";
import AppSection from "../../components/molecules/appSection/AppSection";
import { IFieldInput } from "../../types/utils.types";
import FormikInput from "../../components/atoms/input/Input";
import Dropdown from "../../components/molecules/dropdown/Dropdown";
import RecipeCard from "../../components/molecules/recipeCard/RecipeCard";
import Recipe from "../../types/recipe.types";
import AlertBox from "../../components/atoms/alertBox/AlertBox";

//  TODO: Create searched slice, so data can persist when switching router URL's
// ? Maybe create search form for next time
const SearchPage = () => {
  const initialValues: SearchFormValue = { querySearch: "" };
  const dispatch = useAppDispatch();

  const searchQuery = useAppSelector(selectSearchedRecipesQuery);
  const recipesData = useAppSelector(selectSearchedRecipes);
  const recipesStatus = useAppSelector(selectSearchedRecipesStatus);
  const recipesError = useAppSelector(selectSearchedRecipesError);

  const [sortBy, setSortBy] = useSortRecipes(recipesData, sortRecipes);

  const onSubmit = (
    values: SearchFormValue,
    actions: FormikHelpers<SearchFormValue>
  ) => {
    searchQuery !== values.querySearch &&
      dispatch(searchRecipesThunk(values.querySearch));
    actions.resetForm();
  };

  const validateSearchForm = (values: SearchFormValue): SearchFormValue => {
    const errors = {} as SearchFormValue;
    if (!values.querySearch.trim()) {
      errors.querySearch = "Input cannot be empty!";
    }
    return errors;
  };

  return (
    <AppPage>
      <AppSection headingOne="Search" headingTwo="recipes">
        <Formik
          initialValues={initialValues}
          onSubmit={(values, actions) => onSubmit(values, actions)}
          validate={validateSearchForm}
        >
          {(props: FormikProps<any>) => (
            <Form aria-label="login-form" autoComplete="off">
              <Field name="querySearch">
                {({ field, form }: IFieldInput) => (
                  <FormikInput
                    field={field}
                    isDisabled={recipesStatus === "loading" ? true : false}
                    id="searchRecipe"
                    type="text"
                    icon={<BsSearch />}
                    isInvalid={
                      form.errors.querySearch && form.touched.querySearch
                    }
                  />
                )}
              </Field>
            </Form>
          )}
        </Formik>
      </AppSection>
      <AppSection
        yAxisMinus
        hideHeading={searchQuery === "" || recipesData === []}
        headingOne={(recipesData.length !== 0 && "Results for:") || null}
      >
        {recipesData.length > 0 ? (
          <>
            <Box
              fontFamily="heading"
              fontSize="3xl"
              fontWeight="black"
              sx={{ "& > *": { display: "inline" } }}
              textTransform="capitalize"
            >
              <Box color="primary.500">`</Box>
              {searchQuery}
              <Box color="primary.500">`</Box>
            </Box>
            <Box my={5}>
              <Dropdown
                sortBy={sortBy}
                setSortBy={setSortBy}
                sort
                buttonText="Sort by"
              />
            </Box>
          </>
        ) : recipesStatus !== "loading" ? (
          <Text
            textAlign="center"
            fontSize="xl"
            fontWeight="500"
            color="mono.400"
            my={1}
          >
            Please type something to search.
          </Text>
        ) : (
          ""
        )}
        <Wrap width="100%" spacing="15px">
          {recipesStatus === "loading" ? (
            [...Array(20)].map((_, i) => (
              <RecipeCard img={null} key={i} isLoading allData />
            ))
          ) : recipesData === [] && searchQuery !== "" ? (
            <Text
              textAlign="center"
              fontSize="xl"
              fontWeight="500"
              color="mono.400"
            >
              There are no results based on your query.
            </Text>
          ) : recipesData !== undefined ? (
            recipesData.map((recipe: Recipe, i: number) => {
              const {
                cuisineType,
                label,
                totalTime,
                dishType,
                mealType,
                image,
              } = recipe;
              return (
                <RecipeCard
                  key={label + i}
                  img={image}
                  tags={[cuisineType[0], dishType[0], mealType[0]]}
                  heading={label}
                  prepareTime={totalTime}
                  allData={recipe}
                />
              );
            })
          ) : null}
        </Wrap>
      </AppSection>
      {recipesError && (
        <AlertBox status="error" title={recipesError.name}>
          {recipesError.message}
        </AlertBox>
      )}
      {/* {recipesData !== [] && !recipesStatus && query !== "" ? (
        <Center width="100%">
          <Btn>Show more</Btn>
        </Center>
      ) : undefined} */}
    </AppPage>
  );
};

interface SearchFormValue {
  querySearch: string;
}

export default SearchPage;
