import axios, { AxiosResponse } from "axios";
import { AXIOS } from "~constants/constants";

const edmamamInstance = axios.create({
  baseURL: "https://api.edamam.com/api/recipes/v2?type=public",
  params: {
    app_id: process.env.NEXT_PUBLIC_EDAMAMAM_API_ID,
    app_key: process.env.NEXT_PUBLIC_EDAMAMAM_API_KEY,
    imageSize: "REGULAR",
    random: true,
  },
});

// ? Axios with typescript, there is any in AxiosResponse, but should be defined, dunno how yet
export const getRandomDailyRecipes = (): Promise<AxiosResponse<any>> => {
  return edmamamInstance.get("", {
    params: {
      q: "",
    },
  });
};

export const getRecipes = (query: string): Promise<AxiosResponse<any>> => {
  return edmamamInstance.get("", {
    params: {
      q: query,
    },
    timeout: AXIOS.TIMEOUT,
  });
};
