import React, { useEffect, useState } from "react";

import {
  Box,
  Center,
  Flex,
  HStack,
  Image,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Spacer,
  VStack,
  Wrap,
  Text,
  Button,
  Heading,
  Tag,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";

import SaveButton from "~atoms/button/SaveButton";

import ScrollableRow from "~molecules/scrollableRow/ScrollableRow";
import { useAppDispatch, useAppSelector } from "~store/hooks";
import { selectSavedRecipes } from "~store/slices/savedRecipes.slice";
import {
  readSavedRecipes,
  removeSavedRecipe,
  saveRecipe,
} from "~store/thunks/firestoreCRUD.thunk";
import {
  closeModal,
  selectModalData,
  selectModalOpen,
} from "~store/slices/modalRecipe.slice";

import Recipe from "~types/recipe.types";
import { getAuth, User } from "firebase/auth";

const ModalRecipe = () => {
  const [isSaved, setIsSaved] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const { uid } = getAuth().currentUser || ({} as User);
  const modalRecipeData = useAppSelector(selectModalData);
  const {
    label,
    image,
    totalTime,
    ingredientLines,
    dietLabels,
    healthLabels,
    dishType,
    cuisineType,
    mealType,
    cautions,
    calories,
  } = modalRecipeData || ({} as Recipe);

  const servings = modalRecipeData?.yield || 0;
  const modalOpen = useAppSelector(selectModalOpen);
  const savedRecipes = useAppSelector(selectSavedRecipes);

  const onClick = (isSaved: boolean) => {
    if (isSaved) {
      dispatch(removeSavedRecipe({ uid, label }));
    } else {
      dispatch(saveRecipe({ uid, recipe: modalRecipeData || ({} as Recipe) }));
    }

    setIsSaved(!isSaved);
    dispatch(closeModal());
    dispatch(readSavedRecipes(uid));
  };

  useEffect(() => {
    const checksIfRecipeIsSaved = () => {
      if (savedRecipes === [] || label === undefined) {
        setIsSaved(false);
      }
      const resultCheck = savedRecipes.filter(
        (value) => value!.label === label
      );
      resultCheck.length === 1 ? setIsSaved(true) : setIsSaved(false);
    };
    checksIfRecipeIsSaved();
  }, [savedRecipes, label]);

  return (
    <Modal isCentered isOpen={modalOpen} onClose={() => dispatch(closeModal())}>
      <ModalOverlay />
      <ModalContent
        overflowY="hidden"
        aria-label="modal-recipe"
        maxW="1000px"
        width={["100%", "90%", "85%"]}
        maxH="700px"
        height={["100%", "90%", "85%"]}
      >
        <Flex flexDirection={{ base: "column", md: "row" }} height="100%">
          <Image
            height={{ base: "300px", md: "100%" }}
            maxH="100%"
            width={{ base: "100%", md: "45%" }}
            objectFit="cover"
            src={image === null ? undefined : image}
            alt={label}
          />
          <VStack
            alignItems="flex-start"
            px={["5%", "10%", "5%"]}
            pr={{ md: "7%" }}
            py={["15px", "15px", "25px"]}
            spacing={5}
            height="100%"
            width="100%"
            overflowY="scroll"
          >
            <Box width="100%">
              <HStack width="100%" textTransform="uppercase">
                <Heading as="h3" variant="fira">
                  {label}
                </Heading>
                <Spacer />
                <SaveButton
                  size="md"
                  savedStatus={isSaved}
                  onClick={() => onClick(isSaved)}
                >
                  {isSaved ? "Undo" : "Save"}
                </SaveButton>
              </HStack>
              <ScrollableRow smallSpacing>
                {dishType &&
                  dishType
                    .concat(mealType)
                    .concat(cuisineType)
                    .map((tag, i) => (
                      <Tag label="recipe-tag" key={tag + i}>
                        {tag}
                      </Tag>
                    ))}
              </ScrollableRow>
              <Box fontWeight="600" fontSize="sm" color="mono.400">
                {totalTime === 0 ? "- " : totalTime}mins | {servings} yield
              </Box>
            </Box>
            <ModalRecipeSection heading="Ingredients" type="list">
              <UnorderedList variant="noPadding">
                {ingredientLines &&
                  ingredientLines.map((ingredient, i) => (
                    <ListItem key={i}>{ingredient}</ListItem>
                  ))}
              </UnorderedList>
            </ModalRecipeSection>
            <ModalRecipeSection heading="Caution Labels">
              {cautions &&
                cautions.map((caution) => (
                  <Tag key={caution + "tag"}>{caution}</Tag>
                ))}
            </ModalRecipeSection>
            <ModalRecipeSection heading="Diet Labels">
              {dietLabels &&
                dietLabels.map((dietLabel) => (
                  <Tag key={dietLabel + "tag"}>{dietLabel}</Tag>
                ))}
            </ModalRecipeSection>
            <ModalRecipeSection heading="Health Labels">
              {healthLabels &&
                healthLabels.map((healthyLabel) => (
                  <Tag key={healthyLabel + "tag"}>{healthyLabel}</Tag>
                ))}
              {healthLabels && healthLabels.length === 0 && "-"}
            </ModalRecipeSection>
            <ModalRecipeSection heading="Total Calories">
              <Box fontWeight={700} color="mono.400">
                {Math.round(calories / servings)} KCal / serving
              </Box>
            </ModalRecipeSection>
            <Center my={5} alignSelf="center">
              <Button
                size="lg"
                colorScheme="tertiary"
                onClick={() => dispatch(closeModal())}
              >
                Close
              </Button>
            </Center>
          </VStack>
        </Flex>
        <ModalCloseButton aria-label="close-modal" variant="shadow" />
      </ModalContent>
    </Modal>
  );
};

interface ModalRecipeSectionProps {
  heading: string;
  type?: "list" | "tags";
  children: any;
}

const ModalRecipeSection = ({
  heading,
  type = "tags",
  children,
}: ModalRecipeSectionProps) => {
  return (
    <Box>
      <Heading as="h4" variant="fira">
        {heading}
      </Heading>
      <Box mx={1} my={2}>
        {type === "list" && children ? (
          children
        ) : (
          <Wrap>{children ? children : <Text mx={1}>None</Text>}</Wrap>
        )}
      </Box>
    </Box>
  );
};

export default ModalRecipe;
