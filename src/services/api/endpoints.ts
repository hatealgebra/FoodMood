import axios, { AxiosResponse } from "axios";
import { AXIOS } from "../../utils/constants/constants";

const recipesUrl = "https://api.edamam.com/api/recipes/v2?type=public";

// Add unit test for mocking with the msw

// ? Axios with typescript, there is any in AxiosResponse, but should be defined, dunno how yet
export const getRandomDailyRecipes = (): Promise<AxiosResponse<any>> => {
  return axios.get(recipesUrl, {
    params: {
      app_id: process.env.EDAMAM_APP_ID,
      app_key: process.env.EDAMAM_KEY,
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
        app_id: process.env.EDAMAM_APP_ID,
        app_key: process.env.EDAMAM_KEY,
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
