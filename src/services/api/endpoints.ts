import axios, { AxiosResponse } from "axios";
import { AXIOS } from "../../utils/constants/constants";

const recipesUrl = "https://api.edamam.com/api/recipes/v2?type=public";

// TODO: Add unit test for mocking with the msw
// FIXME: ENV variables

// ? Axios with typescript, there is any in AxiosResponse, but should be defined, dunno how yet
export const getRandomDailyRecipes = (
  query: string
): Promise<AxiosResponse<any>> => {
  return axios.get(recipesUrl, {
    params: {
      app_id: "e53d7bd5",
      app_key: "4c12630c6d4c919bf9bdb9e0513879bb",
      q: query,
    },
  });
};

export const getRecipes = (query: string): Promise<AxiosResponse<any>> => {
  try {
    return axios.get(recipesUrl, {
      params: {
        app_id: "e53d7bd5",
        app_key: "4c12630c6d4c919bf9bdb9e0513879bb",
        q: query,
      },
      timeout: AXIOS.TIMEOUT,
    });
  } catch (e) {
    throw e;
  }
};

export const getMoreRecipes = (
  endpoint: string
): Promise<AxiosResponse<any>> => {
  console.log(endpoint);
  try {
    return axios.get(endpoint, { timeout: AXIOS.TIMEOUT });
  } catch (e) {
    throw e;
  }
};
