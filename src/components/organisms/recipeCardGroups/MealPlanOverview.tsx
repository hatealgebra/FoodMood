import { Stack, useDisclosure } from "@chakra-ui/react";
import React, { useEffect, useLayoutEffect, useState } from "react";
import RecipeCard from "~molecules/recipeCard/RecipeCard";
import ModalFavourites from "~organisms/ModalFavourites";
import { useAppDispatch, useAppSelector } from "~store/hooks";
import {
  TFoodTime,
  selectMealPlanCurrent,
  selectMealPlanDate,
  selectMealPlanPool,
  selectMealPlanStatus,
} from "~store/slices/mealPlan.slice";
import { fetchSpecificPlan } from "~store/thunks/mealPlan.thunk";
import Recipe from "~types/recipe.types";

const MealPlanOverview = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [mealType, setMealType] = useState<TFoodTime | undefined>(undefined);

  const recipesPool = useAppSelector(selectMealPlanPool);
  const currentMealPlan = useAppSelector(selectMealPlanCurrent);
  const mealPlanLoading = useAppSelector(selectMealPlanStatus);
  const date = useAppSelector(selectMealPlanDate);
  const dispatch = useAppDispatch();

  const openModal = (mealTime: TFoodTime) => {
    setMealType(mealTime);
    onOpen();
  };

  useLayoutEffect(() => {
    const todaysDate = new Date();
    dispatch(fetchSpecificPlan(todaysDate));
  }, []);

  return (
    <Stack
      alignItems="center"
      p="2rem 0"
      gap="2rem"
      flexDir={["column", "column", "row"]}
    >
      {Object.keys(currentMealPlan).map((mealType, index) => {
        const recipeData = Object.values(currentMealPlan)[index] as Recipe;

        return (
          <RecipeCard
            key={`${date}-${mealType}`}
            mealPlanType={mealType as TFoodTime}
            onOpen={() => openModal(mealType as TFoodTime)}
            imageSource={recipeData?.image}
            // tags={[cuisineType[0], dishType[0], mealType[0]]}
            heading={recipeData?.label}
            allData={recipeData}
            isLoading={mealPlanLoading === "loading"}
            prepareTime={recipeData?.totalTime}
          />
        );
      })}
      <ModalFavourites
        isOpen={isOpen}
        onClose={onClose}
        date={date}
        mealType={mealType}
      />
    </Stack>
  );
};

export default MealPlanOverview;
