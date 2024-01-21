import React, { SetStateAction } from "react";

import {
  Box,
  HStack,
  Heading,
  IconButton,
  Image,
  Skeleton,
  SkeletonText,
  Tag,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useAppDispatch } from "~store/hooks";

import { MdTimer } from "react-icons/md";

import { openModal } from "~store/slices/modalRecipe.slice";
import { ImageProps } from "next/image";
import { BiPlus } from "react-icons/bi";
import Recipe from "~types/recipe.types";
import ScrollableRow from "~molecules/scrollableRow/ScrollableRow";
import { TFoodTime } from "~store/slices/mealPlan.slice";

// TODO: Use card component from chakra-ui

interface RecipeCardProps {
  imageSource: ImageProps;
  tags?: string[];
  heading?: string;
  prepareTime: number;
  smaller?: boolean;
  isLoading?: boolean;
  allData: any;
  mealPlanType?: TFoodTime;
  onOpen?: () => void;
}

const RecipeCard = ({
  imageSource,
  tags = [],
  heading,
  prepareTime,
  isLoading = false,
  allData,
  mealPlanType,
  onOpen,
}: RecipeCardProps) => {
  const dispatch = useAppDispatch();

  const handleClick = (allData: Recipe) => {
    if (isLoading) {
      return;
    }

    if (!mealPlanType && allData) {
      dispatch(openModal(allData));
      return;
    }

    if (!onOpen) {
      return;
    }

    onOpen();
  };

  return (
    <VStack
      pos="relative"
      spacing={2}
      background="black"
      width="290px"
      aspectRatio={1}
      borderRadius="2px"
      height="365px"
      bg="white"
      align="flex-start"
      className="recipe-card"
      aria-label="recipe-card"
      onClick={() => handleClick(allData)}
      sx={{
        "&:hover": {
          cursor: !isLoading && "pointer",
        },
      }}
    >
      {isLoading || !allData || !Object.keys(allData).length ? (
        <>
          <Skeleton
            boxShadow="base"
            borderRadius="5px"
            width="100%"
            h="220px"
            aria-label="loading-recipe-card"
            endColor={!isLoading ? "gray.100" : "#718096"}
          />
          <SkeletonText
            w="100%"
            mt="4"
            noOfLines={3}
            spacing="4"
            skeletonHeight="4"
            endColor={!isLoading ? "gray.100" : "#718096"}
          />
        </>
      ) : (
        <>
          <Image
            filter="grayScale(.100)"
            boxShadow={imageSource ? "base" : "none"}
            borderRadius="5px"
            objectFit="cover"
            borderColor={!imageSource ? "transparent" : "auto"}
            src={imageSource}
            backgroundColor="gray.100"
            h="220px"
            width="100%"
            aria-label={`${heading} image`}
          />
          <ScrollableRow smallSpacing>
            {tags.map((tag, i) => (
              <Tag aria-label="recipe-tag" key={tag + i}>
                {tag}
              </Tag>
            ))}
          </ScrollableRow>
          <Heading
            as="h3"
            fontFamily="body"
            fontSize="x-large"
            isTruncated
            noOfLines={[2, 1]}
            overflow="hidden"
            width="95%"
          >
            {heading}
          </Heading>
          <HStack
            position="relative"
            bottom="5px"
            color="mono.500"
            spacing={2}
            align="center"
          >
            <MdTimer />
            <Text fontWeight="600" aria-label="time-to-prepare" as="span">{`${
              prepareTime === 0 ? "-" : prepareTime
            } min`}</Text>
          </HStack>
        </>
      )}
      {(!allData || !Object.keys(allData).length) && mealPlanType && (
        <IconButton
          position="absolute"
          aria-label="Add new recipe"
          size="lg"
          isRound
          colorScheme="secondary"
          icon={<BiPlus size="100%" color="#FFF" />}
          width="50px"
          left="50%"
          top="30%"
          transform="translate(-50%)"
        />
      )}
    </VStack>
  );
};
export default RecipeCard;
