'use client';

import { useState } from 'react';
import { useAppDispatch } from '.';
import { SORT_RECIPES_BY } from 'util-types';

const useSortRecipes = (action: Function) => {
  const [sortBy, setSortBy] = useState<SORT_RECIPES_BY>(
    SORT_RECIPES_BY.DEFAULT,
  );
  const dispatch = useAppDispatch();

  const sortList = (sortBy: SORT_RECIPES_BY) => {
    setSortBy(sortBy);
    dispatch(action(sortBy));
  };

  return [sortBy, sortList];
};

export default useSortRecipes;
