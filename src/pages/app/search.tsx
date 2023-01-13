import React from "react";

import { Box, Button, Text, Wrap } from "@chakra-ui/react";
import { Field, Form, Formik, FormikHelpers, FormikProps } from "formik";

import { BsSearch } from "react-icons/bs";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  selectSearchedRecipes,
  selectSearchedRecipesError,
  selectSearchedRecipesQuery,
  selectSearchedRecipesShowNextLink,
  selectSearchedRecipesStatus,
  sortRecipes,
} from "../../store/slices/searchedRecipesSlice";
import useSortRecipes from "../../utils/hooks/useSortRecipes";
import {
  searchRecipes,
  showMoreSearchedRecipes,
} from "../../store/thunks/edamamRecipe.thunk";
import AppPage from "../../components/templates/appPage/AppPage.template";
import AppSection from "../../components/molecules/appSection/AppSection";
import { IFieldInput } from "../../types/utils.types";
import FormikInput from "../../components/atoms/input/Input";
import Dropdown from "../../components/molecules/dropdown/Dropdown";
import RecipeCard from "../../components/molecules/recipeCard/RecipeCard";
import Recipe from "../../types/recipe.types";
import AlertBox from "../../components/atoms/alertBox/AlertBox";
import ShowMoreButton from "../../components/molecules/showMoreButton/ShowMoreButton";
import RecipeCardRow from "../../components/organisms/recipeCardRow/RecipeCardRow";

const SearchPage = () => {
  const initialValues: SearchFormValue = { querySearch: "" };
  const dispatch = useAppDispatch();

  const searchQuery = useAppSelector(selectSearchedRecipesQuery);
  const recipes = useAppSelector(selectSearchedRecipes);
  const showMoreLink = useAppSelector(selectSearchedRecipesShowNextLink);
  const recipesStatus = useAppSelector(selectSearchedRecipesStatus);
  const recipesError = useAppSelector(selectSearchedRecipesError);

  console.log(showMoreLink);

  const [sortBy, setSortBy] = useSortRecipes(recipes, sortRecipes);

  const onSubmit = (
    values: SearchFormValue,
    actions: FormikHelpers<SearchFormValue>
  ) => {
    searchQuery !== values.querySearch &&
      dispatch(searchRecipes(values.querySearch));
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
        hideHeading={searchQuery === "" || recipes.length === 0}
        headingOne={(recipes.length !== 0 && "Results for:") || null}
      >
        {recipes.length > 0 ? (
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
          ) : recipes.length === 0 && searchQuery !== "" ? (
            <Text
              textAlign="center"
              fontSize="xl"
              fontWeight="500"
              color="mono.400"
            >
              There are no results based on your query.
            </Text>
          ) : recipes !== undefined ? (
            recipes.map((recipeData, i) => {
              const { status, data, error } = recipeData;
              return (
                <RecipeCardRow
                  key={`Recipe Card Row ${i}`}
                  isLoading={status === "loading" ? true : false}
                  recipes={data.hits}
                  error={error}
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
      {recipes.length !== 0 && recipesStatus == "idle" && searchQuery !== "" ? (
        <ShowMoreButton
          nextLink={showMoreLink}
          dispatchAction={showMoreSearchedRecipes}
        />
      ) : undefined}
    </AppPage>
  );
};

interface SearchFormValue {
  querySearch: string;
}

export default SearchPage;
