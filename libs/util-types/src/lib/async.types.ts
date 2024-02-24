import { SORT_RECIPES_BY } from './enums';
import { IRecipe } from './recipe';

export type RecipesData = [] | IRecipe[];

export interface FetchingRecipes {
  status: 'loading' | 'idle';
  recipesList: RecipesData;
  sort: SORT_RECIPES_BY;
  error?: Error;
}

export interface SearchRecipes extends FetchingRecipes {
  query: string;
}

export interface FetchRecipesError {
  name: string;
  message: string;
}

// AUTHENTICATION TYPES

export interface UserSliceProps {
  data: { uid: string; name: string; email: string } | null;
  status: 'loading' | 'idle';
  error?: Error;
}

export interface LoginCredentials {
  email: string;
  psw: string;
}

export interface CreateUserProps {
  name?: string;
  email: string;
  psw: string;
}

export interface FetchSavedRecipes {
  recipes: [] | IRecipe[];
}
