import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getMoreRecipes,
  getRandomDailyRecipes,
  getRecipes,
} from "../../services/api/endpoints";
import { FetchRecipesError } from "../../types/async.types";
import { Hit, RootObjectEdamam } from "../../types/recipe.types";

// FIXME: type args for thunks
// TODO: Comment for each thunk
/**
 * Thunk function created with crateAsyncThunk
 ** Types for create Async thunk are:
 **  1. What type will be returned as result
 **  2. Tells what argument takes the function inside
 **  3. The third type-parameter is an object with: `{dispatch?, state?, extra?, rejectValue?}`` fields.
 *
 * @param  {string} query String query on which the fetch is based
 * @param  {} thunkApi object that contains all the fields and the rejectWithValue function
 *
 */
export const getRandomRecipes = createAsyncThunk<
  RootObjectEdamam,
  string,
  { rejectValue: FetchRecipesError }
>("getRandomRecipes/fetch", async (query: string, thunkApi) => {
  try {
    const recipesResponse = await getRandomDailyRecipes(query);
    const { data } = recipesResponse;
    return data;
  } catch (e) {
    return thunkApi.rejectWithValue({
      name: "No data avalaible",
      message:
        "Very possible there is problem with external service. Please try later or contact admin of the page.",
    });
  }
});
/**
 * Thunk function created with crateAsyncThunk
 ** Types for create Async thunk are:
 **  1. What type will be returned as result
 **  2. Tells what argument takes the function inside
 **  3. The third type-parameter is an object with: `{dispatch?, state?, extra?, rejectValue?}`` fields.
 *
 * @param  {string} query String query on which the fetch is based
 * @param  {} thunkApi object that contains all the fields and the rejectWithValue function
 *
 */
export const showMoreRecipes = createAsyncThunk<
  RootObjectEdamam,
  string,
  { rejectValue: FetchRecipesError }
>("showMoreRecipes/fetch", async (endpoint: string, thunkApi) => {
  try {
    const recipesResponse = await getMoreRecipes(endpoint);
    const { data } = recipesResponse;
    return data;
  } catch (e) {
    return thunkApi.rejectWithValue({
      name: "No data avalaible",
      message:
        "Very possible there is problem with external service. Please try later or contact admin of the page.",
    });
  }
});

/**
 * Thunk function created with crateAsyncThunk
 ** Types for create Async thunk are:
 **  1. What type will be returned as result
 **  2. Tells what argument takes the function inside
 **  3. The third type-parameter is an object with: `{dispatch?, state?, extra?, rejectValue?}`` fields.
 *
 * @param  {string} query String query on which the fetch is based
 * @param  {} thunkApi object that contains all the fields and the rejectWithValue function
 *
 */
export const searchRecipes = createAsyncThunk<
  Hit[],
  string,
  { rejectValue: FetchRecipesError }
>("searchRecipes/fetch", async (searchQuery: string, thunkApi) => {
  const trimmedQuery = searchQuery.trim();
  try {
    const recipesResponse = await getRecipes(trimmedQuery);
    console.log(recipesResponse);
    const { data } = recipesResponse;
    return { query: searchQuery, hits: data.hits };
  } catch (e) {
    return thunkApi.rejectWithValue({
      name: "No data avalaible",
      message:
        "Very possible there is problem with external service. Please try later or contact admin of the page.",
    });
  }
});
