"use client";

import { useEffect, useState } from "react";

import { AnyAction } from "redux";
import { useAppDispatch } from "~store/hooks";
import Recipe from "~types/recipe.types";
import { SortByOptions } from "~types/utils.types";

const useSortRecipes = (recipes: Recipe[], action: AnyAction) => {
  const [sortBy, setSortBy] = useState<SortByOptions>("default");
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(action());
  }, [setSortBy, action, dispatch]);

  return [sortBy, setSortBy];
};

export default useSortRecipes;
