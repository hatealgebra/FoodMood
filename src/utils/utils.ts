import * as myConstClass from "./constants/constants";

import Recipe from "../types/recipe.types";

export const sortRecipesBy = (recipes: Recipe[], sortBy: string) => {
  return recipes.sort((prev, next) => {
    switch (sortBy) {
      case myConstClass.SORT_BY.CALS_LOW_HIGH:
        return prev.calories - next.calories;
      case myConstClass.SORT_BY.CALS_HIGH_LOW:
        return next.calories - prev.calories;
      case myConstClass.SORT_BY.TIME_LOW_HIGH:
        return next.totalTime - prev.totalTime;
      case myConstClass.SORT_BY.TIME_HIGH_LOW:
        return prev.totalTime - next.totalTime;
      case "default":
        return 0.5 - Math.random();
      default:
        return 0;
    }
  });
};
