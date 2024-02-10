import React from "react";

import { Box, Image, Text } from "@chakra-ui/react";
import Overline from "../../atoms/overLine/Overline";

const DishPlan = ({ dish, img, mealName }: DishPlanProps) => {
  return (
    <Box width="100%">
      <Overline>
        <Text
          aria-label={dish}
          fontWeight="600"
          as="h3"
          textTransform="capitalize"
        >
          {dish}
        </Text>
      </Overline>
      <Image
        width="100%"
        maxWidth="350px"
        height={{ base: "120px", sm: "150px", md: "200px" }}
        objectFit="cover"
        src={img}
        alt={mealName}
      />
      <Box fontSize="2xl" fontWeight="600" textTransform="capitalize">
        {mealName}
      </Box>
    </Box>
  );
};

export interface DishPlanProps {
  dish: "breakfast" | "lunch" | "dinner";
  img?: string;
  mealName?: string;
}

export default DishPlan;
