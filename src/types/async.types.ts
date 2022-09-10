import Recipe from "./recipe.types";
import { SortByOptions } from "./utils.types";

export type RecipesData = [] | Recipe[];

export interface FetchingRecipes {
  status: "loading" | "idle";
  recipesList: RecipesData;
  sort: SortByOptions;
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
  status: "loading" | "idle";
  error?: Error;
}

export interface LoginCredentials {
  email: string;
  pwd: string;
}

export interface CreateUserProps {
  name?: string;
  email: string;
  pwd: string;
}

export interface FetchSavedRecipes {
  recipes: [] | Recipe[];
}
