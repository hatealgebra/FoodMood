import { createAsyncThunk } from "@reduxjs/toolkit";
import { getRecipes } from "../../services/api/endpoints";
import { FetchRecipesError } from "../../types/async.types";
import { Hit } from "../../types/recipe.types";

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
export const fetchRecipes = createAsyncThunk<
  Hit[],
  string,
  { rejectValue: FetchRecipesError }
>("searchRecipes/fetch", async (query: string, thunkApi) => {
  const trimmedQuery = query.trim();
  try {
    const recipesResponse = await getRecipes(trimmedQuery);
    const { data } = recipesResponse;
    const recipesData = data.hits;
    return recipesData;
  } catch (e) {
    return thunkApi.rejectWithValue({
      name: "No data avalaible",
      message:
        "Very possible there is problem with external service. Please try later or contact admin of the page.",
    });
  }
});

export const searchRecipesThunk = createAsyncThunk<
  { query: string; hits: Hit[] },
  string,
  { rejectValue: Error }
>("recipes/search", async (query: string, thunkApi) => {
  try {
    const searchResponse = await getRecipes(query);
    const { hits } = searchResponse.data;
    return { query, hits };
  } catch (err) {
    return thunkApi.rejectWithValue({ name: "Error", message: "hallo" });
  }
});
