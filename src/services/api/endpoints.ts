import axios, { AxiosResponse } from "axios";
import { AXIOS } from "~constants/constants";
import { edamamaAppId, edamamKey } from "./auth";

const recipesUrl = "https://api.edamam.com/api/recipes/v2?type=public";

// Add unit test for mocking with the msw

// ? Axios with typescript, there is any in AxiosResponse, but should be defined, dunno how yet
export const getRandomDailyRecipes = (): Promise<AxiosResponse<any>> => {
  return axios.get(recipesUrl, {
    params: {
      app_id: edamamaAppId,
      app_key: edamamKey,
      random: true,
      q: "",
      imageSize: "large",
    },
  });
};

export const getRecipes = (query: string): Promise<AxiosResponse<any>> => {
  try {
    return axios.get(recipesUrl, {
      params: {
        app_id: edamamaAppId,
        app_key: edamamKey,
        random: true,
        q: query,
        imageSize: "large",
      },
      timeout: AXIOS.TIMEOUT,
    });
  } catch (e) {
    throw e;
  }
};
