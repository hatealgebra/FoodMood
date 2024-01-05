import React from "react";

import {
  Box,
  HStack,
  Heading,
  Image,
  Skeleton,
  Tag,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useAppDispatch } from "../../../store/hooks";

import { MdTimer } from "react-icons/md";
import ScrollableRow from "../scrollableRow/ScrollableRow";
import { openModal } from "~store/slices/modalRecipe.slice";
import { ImageProps } from "next/image";

// TODO: Use card component from chakra-ui

interface RecipeCardProps {
  imageSource: ImageProps;
  tags?: string[];
  heading?: string;
  prepareTime?: number;
  smaller?: boolean;
  isLoading?: boolean;
  allData: any;
}

const RecipeCard = ({
  imageSource,
  tags = [],
  heading,
  prepareTime,
  smaller,
  isLoading = false,
  allData,
}: RecipeCardProps) => {
  const dispatch = useAppDispatch();

  return (
    <VStack
      spacing={2}
      background="black"
      width="290px"
      aspectRatio={1}
      borderRadius="2px"
      bg="white"
      align="flex-start"
      className="recipe-card"
      aria-label="recipe-card"
      onClick={() => !isLoading && dispatch(openModal(allData))}
      sx={{
        "&:hover": {
          cursor: !isLoading && "pointer",
        },
      }}
    >
      {isLoading ? (
        <>
          <Skeleton
            boxShadow="base"
            borderRadius="5px"
            width="100%"
            h="220px"
            aria-label="loading-recipe-card"
          />
          <Skeleton fontSize="md4">Pumpkin Soup Recipe</Skeleton>
          <Skeleton>80 minutes</Skeleton>
        </>
      ) : (
        <>
          <Image
            filter="grayScale(.100)"
            boxShadow="base"
            borderRadius="5px"
            objectFit="cover"
            src={imageSource}
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
    </VStack>
  );
};
export default RecipeCard;
