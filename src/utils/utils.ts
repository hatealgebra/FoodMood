import * as myConstClass from "~constants/constants";

import Recipe from "~types/recipe.types";

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

export const transformStringToDate = (date: string): Date => {
  const [year, month, day] = date.split("/");
  return new Date(Number(year), Number(month) - 1, Number(day));
};

export const transformDateToString = (date: Date): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

export const getTodaysDate = (): string => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};
