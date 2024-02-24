import { getMealPlanDateRef, getRecipeRef } from '../references';
import { getDoc, setDoc, updateDoc } from 'firebase/firestore';
import mapValues from 'lodash/mapValues';
import { TFoodTime } from 'util-types';

export const getPlanDB = async (uid: string, dateKey: string) => {
  const mealPlanRef = getMealPlanDateRef(uid, dateKey);
  const mealPlanData = (await getDoc(mealPlanRef)).data();

  const mappedMeals = mapValues(mealPlanData, async (value) => {
    if (!Object.keys(value).length) {
      return {};
    }
    const recipeData = (await getDoc(value)).data();
    return recipeData;
  });
  return (
    mappedMeals || {
      date: dateKey,
      mealPlan: {
        breakfast: {},
        lunch: {},
        dinner: {},
      },
    }
  );
};

export const addPlan = async (
  uid: string,
  currentDate: string,
  mealType: TFoodTime,
  recipeLabel: string
) => {
  const recipeRef = getRecipeRef(uid, recipeLabel);
  const targetRef = getMealPlanDateRef(uid, currentDate!);

  if (!(await getDoc(targetRef)).data()) {
    await setDoc(targetRef, { breakfast: {}, lunch: {}, dinner: {} });
  }

  await updateDoc(targetRef, { [mealType]: recipeRef });
};

export const removeRecipeFromPlan = async (
  uid: string,
  currentDate,
  mealType: TFoodTime
) => {
  const targetRef = getMealPlanDateRef(uid, currentDate!);
  await updateDoc(targetRef, { [mealType]: {} });
};
