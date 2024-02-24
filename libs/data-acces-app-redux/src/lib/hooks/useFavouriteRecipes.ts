import { getAuth } from '@firebase/auth';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '.';
import {
  selectSavedRecipes,
  selectSavedRecipesError,
  selectSavedRecipesStatus,
} from '../slices';
import { readSavedRecipes } from '../thunks';

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
