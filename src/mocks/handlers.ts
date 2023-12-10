import { HttpResponse, http } from "msw";
import dailyRecipes from "./data/dailyRecipes.json";

export const handlers = [
  // edamam recipe search
  http.get("https://api.edamam.com/api/recipes/v2", ({ req, res }) => {
    return HttpResponse.json(dailyRecipes);
  }),
];
