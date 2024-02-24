import { getAuth } from "@firebase/auth";
import React, { useEffect, useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "~store/hooks";
import {
  selectSavedRecipes,
  selectSavedRecipesError,
  selectSavedRecipesStatus,
} from "~store/slices/savedRecipes.slice";
import { readSavedRecipes } from "~store/thunks/firestoreCRUD.thunk";

const useFavouriteRecipes = () => {
  const savedRecipes = useAppSelector(selectSavedRecipes) || [];
  const savedRecipesStatus = useAppSelector(selectSavedRecipesStatus);
  const savedRecipesError = useAppSelector(selectSavedRecipesError);
  const dispatch = useAppDispatch();
  const { currentUser } = getAuth();

  useEffect(() => {
    dispatch(readSavedRecipes(currentUser?.uid));
  }, [currentUser, dispatch]);

  return { savedRecipes, savedRecipesStatus, savedRecipesError };
};

export default useFavouriteRecipes;
