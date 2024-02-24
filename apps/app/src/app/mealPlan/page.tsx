"use client";
import React, { useMemo, useState } from "react";

import AppSection from "~molecules/appSection/AppSection";
import { BiCalendar } from "react-icons/bi";
import {
  Box,
  ButtonGroup,
  Center,
  HStack,
  Heading,
  Text,
  useFormControlStyles,
} from "@chakra-ui/react";
import DayNumber from "~atoms/dayButton/DayButton";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getDayFromDate, transformStringToDate } from "~utils.utils";
import { useAppDispatch, useAppSelector } from "~store/hooks";
import { selectMealPlanDate } from "~store/slices/mealPlan.slice";
import { fetchSpecificPlan } from "~store/thunks/mealPlan.thunk";
import MealPlanOverview from "~organisms/recipeCardGroups/MealPlanOverview";

const MealPlanPage = () => {
  const [calendarOpen, setCalendarOpen] = useState(false);
  const selectDateKey = useAppSelector(selectMealPlanDate);
  const dispatch = useAppDispatch();

  const selectedDate = useMemo(() => {
    const dayDiff = ["-2", "-1", "0", "1", "2"];
    const dateToSet = selectDateKey
      ? transformStringToDate(selectDateKey)
      : new Date();

    const dayName = dateToSet.toLocaleString("en-us", { weekday: "long" });
    const monthName = dateToSet.toLocaleString("en-us", { month: "long" });
    const arrayDays = dayDiff.map((dayDiff) =>
      getDayFromDate(dateToSet, dayDiff)
    );

    return {
      dayNumbers: arrayDays,
      fullDate: dateToSet,
      dayNumber: arrayDays[2],
      dayName,
      monthName,
    };
  }, [selectDateKey]);

  const setDate = (date: Date) => {
    console.log(date);
    dispatch(fetchSpecificPlan(date));
    setCalendarOpen(false);
  };

  return (
    <>
      <AppSection hideHeading overflow="hidden">
        <Box pos="relative">
          <Center display="flex" columnGap="11px">
            <BiCalendar size="24px" />
            <Heading as="h1" size="lg" fontFamily="body">
              {selectedDate.dayName}
              <Text
                display="inline"
                fontWeight={300}
                size="lg"
                fontFamily="body"
              >
                {`, ${selectedDate.monthName}`}
              </Text>
            </Heading>
          </Center>
          <ButtonGroup
            dir="row"
            mt="24px"
            gap={["20px", "25px"]}
            margin="24px auto 0"
            cursor="pointer"
            w="100%"
            justifyContent="center"
            alignItems="center"
            onClick={() => setCalendarOpen(true)}
          >
            {selectedDate.dayNumbers.map((number) => (
              <DayNumber
                key={`day-number-${number}`}
                number={number}
                isActive={number === selectedDate.dayNumber}
              />
            ))}
          </ButtonGroup>
          <ReactDatePicker
            selected={selectedDate.fullDate}
            onChange={(date: Date) => setDate(date)}
            open={calendarOpen}
            dateFormat={"yyyy/MM/dd"}
            todayButton="Show today's meal plan"
            onClickOutside={() => setCalendarOpen(false)}
          />
        </Box>
      </AppSection>
      <AppSection
        headingOne={`${selectedDate.dayName}'s`}
        headingTwo="meal plan"
      >
        <MealPlanOverview />
      </AppSection>
    </>
  );
};

export default MealPlanPage;
