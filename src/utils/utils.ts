import * as myConstClass from "../constants/constants";

import Recipe from "../types/recipe.types";

export const sortRecipesBy = (recipes: Recipe[], sortBy: string) => {
  return recipes.sort((prev, next) => {
    const prevCalServing = prev.calories / prev.yield;
    const nextCalServing = next.calories / next.yield;

    switch (sortBy) {
      case myConstClass.SORT_BY.CALS_LOW_HIGH:
        return prevCalServing - nextCalServing;
      case myConstClass.SORT_BY.CALS_HIGH_LOW:
        return nextCalServing - prevCalServing;
      case myConstClass.SORT_BY.TIME_LOW_HIGH:
        return prev.totalTime - next.totalTime;
      case myConstClass.SORT_BY.TIME_HIGH_LOW:
        return next.totalTime - prev.totalTime;
      case "default":
        return 0.5 - Math.random();
      default:
        return 0;
    }
  });
};
