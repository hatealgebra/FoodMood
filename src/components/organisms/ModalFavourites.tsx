import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  List,
  ListItem,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Tag,
} from "@chakra-ui/react";
import { remove } from "firebase/database";
import React, { useCallback } from "react";
import Loading from "~app/app/loading";
import useFavouriteRecipes from "~hooks/useFavouriteRecipes";
import { useAppDispatch, useAppSelector } from "~store/hooks";
import {
  TFoodTime,
  selectMealPlanCurrent,
  selectMealPlanDate,
} from "~store/slices/mealPlan.slice";
import { openModal } from "~store/slices/modalRecipe.slice";
import {
  addRecipePlanThunk,
  removeRecipeThunk,
} from "~store/thunks/mealPlan.thunk";
import Recipe from "~types/recipe.types";

interface ModalFavouritesProps {
  isOpen: boolean;
  onClose: () => void;
  date?: string;
  mealType?: TFoodTime;
}

const ModalFavourites = ({
  isOpen,
  onClose,
  mealType,
}: ModalFavouritesProps) => {
  const { savedRecipes, savedRecipesStatus } = useFavouriteRecipes();
  const currMealPlan = useAppSelector(selectMealPlanCurrent);
  const dispatch = useAppDispatch();

  const isAlreadySet = useCallback(
    (recipeLabel: string) => {
      if (currMealPlan && mealType) {
        const { label } = currMealPlan[mealType];
        return label === recipeLabel;
      }
      return false;
    },
    [currMealPlan, mealType]
  );

  const handleRecipeClick = (mealType: TFoodTime, recipeData: Recipe) => {
    const { label } = recipeData;
    console.log(isAlreadySet(label));
    if (isAlreadySet(label)) {
      dispatch(removeRecipeThunk(mealType));
      return;
    }

    dispatch(
      addRecipePlanThunk({
        mealType,
        recipe: recipeData,
      })
    );
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} blockScrollOnMount size="xl">
      <ModalOverlay />
      <ModalContent minBlockSize="xl">
        <ModalHeader>
          <Heading variant="fira" as="h2" size="xl" textAlign="center">
            <Box color="#373737" textTransform="uppercase" display="inline">
              Your favourite
            </Box>
            <Box
              ml={2}
              textTransform="uppercase"
              color={"primary.500"}
              display="inline"
            >
              recipes
            </Box>
          </Heading>
        </ModalHeader>
        <ModalBody>
          <List>
            {savedRecipesStatus === "loading" && <Loading />}
            {savedRecipesStatus === "idle" &&
              savedRecipes.map((recipe) => {
                return (
                  <ListItem
                    display="flex"
                    key={recipe.label}
                    borderTop="1px solid lightGray"
                    m="0"
                    justifyContent="space-between"
                    alignItems="center"
                    pr="2%"
                  >
                    <Heading fontFamily="body" as="h4" display="inline">
                      <Flex
                        justifyContent="space-between"
                        gap="15px"
                        p="15px 5px"
                        alignItems="center"
                      >
                        <Box
                          as="span"
                          flex="1"
                          textAlign="left"
                          fontSize="md"
                          fontWeight="400"
                        >
                          {recipe.label}
                        </Box>
                        <Tag color="secondary.500" fontSize="sm">
                          {recipe.mealType}
                        </Tag>
                      </Flex>
                    </Heading>
                    <ButtonGroup>
                      <Button
                        size="sm"
                        colorScheme="primary"
                        w="full"
                        onClick={() => dispatch(openModal(recipe))}
                      >
                        Show
                      </Button>
                      <Button
                        w="full"
                        size="sm"
                        colorScheme={
                          isAlreadySet(recipe.label) ? "red" : "tertiary"
                        }
                        onClick={() => handleRecipeClick(mealType, recipe)}
                      >
                        {isAlreadySet(recipe.label) ? "Remove" : "Choose"}
                      </Button>
                    </ButtonGroup>
                  </ListItem>
                );
              })}
          </List>
        </ModalBody>
        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalFavourites;
