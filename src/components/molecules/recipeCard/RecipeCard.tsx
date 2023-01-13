import React from "react";

import {
  Box,
  HStack,
  Image,
  Skeleton,
  Tag,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useAppDispatch } from "../../../store/hooks";

import { MdTimer } from "react-icons/md";
import ScrollableRow from "../scrollableRow/ScrollableRow";
import { openModal } from "../../../store/slices/modalRecipe.slice";

const RecipeCard = ({
  img,
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
      onClick={() => !isLoading && dispatch(openModal(allData))}
      spacing={2}
      background="black"
      width={["100%", "180px", "290px"]}
      minWidth={smaller ? "140px" : "180px"}
      height={["280px", "230px", "310px"]}
      borderRadius="2px"
      bg="white"
      align="flex-start"
      aria-label="recipe-card"
      className="recipe-card"
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
            height="55%"
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
            src={img === null ? undefined : img}
            width="100%"
            height="55%"
            aria-label={`${heading} image`}
          />
          <ScrollableRow smallSpacing>
            {tags.map((tag, i) => (
              <Tag aria-label="recipe-tag" key={tag + i}>
                {tag}
              </Tag>
            ))}
          </ScrollableRow>
          <Box
            fontSize="xl"
            fontWeight="600"
            width="inherit"
            overflow="hidden"
            textOverflow="elipsis"
            textTransform="capitalize"
          >
            {heading}
          </Box>
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

interface RecipeCardProps {
  img: string | null;
  tags?: string[];
  heading?: string;
  prepareTime?: number;
  smaller?: boolean;
  isLoading?: boolean;
  allData: any;
}

export default RecipeCard;
