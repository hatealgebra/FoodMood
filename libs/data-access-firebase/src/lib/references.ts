import { collection, doc } from 'firebase/firestore';
import { dbFirestore } from '../config';

export const userRef = (uid: string) => doc(dbFirestore, 'users', uid);

export const savedRecipesRef = (uid: string) =>
  collection(dbFirestore, 'users', uid, 'favouriteRecipes');

export const searchHistoryRef = (uid: string) => doc(dbFirestore, 'users', uid);

export const getRecipeRef = (uid: string, label: string) =>
  doc(dbFirestore, 'users', uid, 'favouriteRecipes', label);

export const getMealPlanDateRef = (uid: string, date: string) =>
  doc(dbFirestore, 'users', uid, 'mealPlan', date);
