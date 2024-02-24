import { IRecipe, SORT_RECIPES_BY } from 'util-types';

export const sortRecipesBy = (recipes: IRecipe[], sortBy: string) => {
  return recipes.sort((prev, next) => {
    const prevCalServing = prev.calories / prev.yield;
    const nextCalServing = next.calories / next.yield;

    switch (sortBy) {
      case SORT_RECIPES_BY.CALS_LOW_HIGH:
        return prevCalServing - nextCalServing;
      case SORT_RECIPES_BY.CALS_HIGH_LOW:
        return nextCalServing - prevCalServing;
      case SORT_RECIPES_BY.TIME_LOW_HIGH:
        return prev.totalTime - next.totalTime;
      case SORT_RECIPES_BY.TIME_HIGH_LOW:
        return next.totalTime - prev.totalTime;
      case 'default':
        return 0.5 - Math.random();
      default:
        return 0;
    }
  });
};

export const transformStringToDate = (dateKey: string): Date => {
  const [year, month, day] = dateKey.split('-');
  return new Date(Number(year), Number(month) - 1, Number(day));
};

export const transformDateToString = (date: Date): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

export const getTodaysString = (): string => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

export const getDayFromDate = (date: Date, diff: string) => {
  const dateInstance = new Date(date);
  const diffNumber = Number(diff);
  dateInstance.setDate(date.getDate() + diffNumber);

  return dateInstance.getDate();
};
