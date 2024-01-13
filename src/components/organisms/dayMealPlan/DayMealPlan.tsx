import {
  Box,
  Button,
  Card,
  LinkOverlay,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import RecipeCard from "~molecules/recipeCard/RecipeCard";
import ModalFavourites from "~organisms/ModalFavourites";
import { useAppSelector } from "~store/hooks";
import {
  selectMealPlanCurrent,
  selectMealPlanDate,
} from "~store/slices/mealPlan.slice";

type Props = {};

const DayMealPlan = (props: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const currentMealPlan = useAppSelector(selectMealPlanCurrent);

  return (
    <Stack
      alignItems="center"
      p="2rem 0"
      gap="2rem"
      flexDir={["column", "column", "row"]}
    >
      {Object.keys(currentMealPlan).map((mealType, index) => {
        const recipeData = Object.values(currentMealPlan)[index];

        return <RecipeCard mealPlanType={mealType} onOpen={onOpen} />;
      })}
      <ModalFavourites isOpen={isOpen} onClose={onClose} />
    </Stack>
  );
};

export default DayMealPlan;
