import { createAsyncThunk } from "@reduxjs/toolkit";
import { FetchRecipesError } from "~types/async.types";
import { getTodaysDate } from "~utils.utils";

export const fetchTodaysPlan = createAsyncThunk<
  any,
  string,
  { rejectValue: any }
>("searchRecipes/fetch", async (_, thunkApi) => {
  const todaysDate = getTodaysDate();
  console.log(todaysDate);
  try {
  } catch (e) {
    return thunkApi.rejectWithValue({});
  }
});
