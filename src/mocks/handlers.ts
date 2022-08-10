import { rest } from "msw";
import dailyRecipes from "./data/dailyRecipes.json";

export const handlers = [
  // edamam recipe search
  rest.get("https://api.edamam.com/api/recipes/v2", (req, res, ctx) => {
    return res(ctx.status(200), ctx.delay(1000), ctx.json(dailyRecipes));
  }),
];
