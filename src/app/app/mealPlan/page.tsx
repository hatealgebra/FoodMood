"use client";
import React, { useState } from "react";

import AppSection from "~molecules/appSection/AppSection";
import { BiCalendar } from "react-icons/bi";
import { Center, HStack, Heading, Text } from "@chakra-ui/react";
import NumberBox from "~atoms/numberBox/NumberBox";
import DayMealPlan from "~organisms/dayMealPlan/DayMealPlan";

const MealPlanPage = () => {
  const [date, setDate] = useState();

  const numbers = [31, 1, 2, 3, 4];

  return (
    <>
      <AppSection hideHeading overflow="hidden">
        <Center display="flex" columnGap="11px">
          <BiCalendar size="24px" />
          <Heading as="h1" size="lg" fontFamily="body">
            Sunday
            <Text display="inline" fontWeight={300} size="lg" fontFamily="body">
              ,August
            </Text>
          </Heading>
        </Center>
        <HStack
          dir="row"
          mt="24px"
          gap={["20px", "25px"]}
          w="fit-content"
          ml="50%"
          transform="translateX(-50%)"
        >
          {numbers.map((number) => (
            <NumberBox
              key={`day-number-${number}`}
              number={number}
              isActive={number === 2}
            />
          ))}
        </HStack>
      </AppSection>
      <AppSection headingOne="Today's" headingTwo="meal plan">
        <DayMealPlan />
      </AppSection>
    </>
  );
};

export default MealPlanPage;
