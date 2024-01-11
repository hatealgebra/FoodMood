"use client";

import { useState } from "react";

import { useAppDispatch } from "~store/hooks";
import { SortByOptions } from "~types/utils.types";

const useSortRecipes = (action: Function) => {
  const [sortBy, setSortBy] = useState<SortByOptions>("default");
  const dispatch = useAppDispatch();

  const sortList = (sortBy: SortByOptions) => {
    setSortBy(sortBy);
    dispatch(action(sortBy));
  };

  return [sortBy, sortList];
};

export default useSortRecipes;
