import { IRecipe } from 'util-types';

/**
 *
 * Checks if the data are object from RTL firebase or response from the API, then it processes.
 *
 * @param {(object | Array<object>)} data -> either can be RTL object or response from Edamam API
 * @return {*}  {Array<object>} -> returns set of objects as array or empty array, because if the favourite_recipes property
 * in RTL firebase database is without children, it is deleted, but it is managed in the CRUD.ts and the new value favourite_recipes: 0 is made
 */
export const recipeRowOrigin = (data: IRecipe[]): IRecipe[] => {
  if (!data) {
    return [];
  }
  if (typeof data === 'object') {
    const arrayOfData = [...Object.values(data)].map((value) => {
      return value;
    });
    return arrayOfData;
  } else {
    return data;
  }
};
