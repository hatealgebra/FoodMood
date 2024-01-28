import React, { SetStateAction } from "react";

import {
  Box,
  Button,
  Center,
  Flex,
  HStack,
  Heading,
  IconButton,
  Image,
  Skeleton,
  SkeletonText,
  Tag,
  Text,
  Tooltip,
  VStack,
} from "@chakra-ui/react";
import { useAppDispatch } from "~store/hooks";

import { MdTimer } from "react-icons/md";

import { openModal } from "~store/slices/modalRecipe.slice";
import { ImageProps } from "next/image";
import { BiPlus } from "react-icons/bi";
import ScrollableRow from "~molecules/scrollableRow/ScrollableRow";
import { TFoodTime } from "~store/slices/mealPlan.slice";
import { CgRemove } from "react-icons/cg";
import { LiaEdit } from "react-icons/lia";
import { RiEyeLine } from "react-icons/ri";
import {
  addRecipePlanThunk,
  removeRecipeThunk,
} from "~store/thunks/mealPlan.thunk";

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

enum OnClickActionEnum {
  ADD = "add",
  SHOW = "show",
  CHANGE = "change",
  REMOVE = "remove",
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

  const handleClick = (type: OnClickActionEnum) => {
    if (isLoading) {
      return;
    }

    switch (type) {
      case OnClickActionEnum.ADD || OnClickActionEnum.CHANGE:
        onOpen && onOpen();
        break;

      case OnClickActionEnum.SHOW:
        dispatch(openModal(allData));
        break;
      case OnClickActionEnum.REMOVE:
        dispatch(removeRecipeThunk(mealPlanType!));
        break;
      default:
        onOpen && onOpen();
        break;
    }
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
      <Center pos="absolute" w="100%" height="220px">
        {!Object.keys(allData).length && mealPlanType && (
          <Center
            as="button"
            w="inherit"
            h="inherit"
            onClick={() => handleClick(OnClickActionEnum.ADD)}
          >
            <IconButton
              aria-label="Add new recipe"
              size="lg"
              isRound
              colorScheme="secondary"
              icon={<BiPlus size="40px" color="#FFF" />}
              width="50px"
            />
          </Center>
        )}
        {Object.keys(allData).length > 0 && mealPlanType && (
          <Flex
            height="100%"
            width="100%"
            justifyContent="center"
            alignItems="center"
            gap="20px"
            backgroundColor="rgba(0,0,0,.5)"
            opacity={0}
            transition=".3s ease-in-out opacity"
            _hover={{ opacity: 1 }}
            _active={{ opacity: 1 }}
          >
            <Tooltip label="Show detail">
              <IconButton
                aria-label="Show detail"
                onClick={() => handleClick(OnClickActionEnum.SHOW)}
                size="lg"
                isRound
                colorScheme="secondary"
                icon={<RiEyeLine size="20px" color="#FFF" />}
                width="50px"
              />
            </Tooltip>
            <Tooltip label="Change recipe">
              <IconButton
                aria-label="Change recipe"
                onClick={() => handleClick(OnClickActionEnum.CHANGE)}
                size="lg"
                isRound
                colorScheme="primary"
                icon={<LiaEdit size="20px" color="#FFF" />}
                width="50px"
              />
            </Tooltip>
            <Tooltip label="Remove recipe">
              <IconButton
                aria-label="Remove recipe"
                onClick={() => handleClick(OnClickActionEnum.REMOVE)}
                size="lg"
                isRound
                colorScheme="red"
                icon={<CgRemove size="20px" color="#FFF" />}
                width="50px"
              />
            </Tooltip>
          </Flex>
        )}
      </Center>
    </VStack>
  );
};
export default RecipeCard;
