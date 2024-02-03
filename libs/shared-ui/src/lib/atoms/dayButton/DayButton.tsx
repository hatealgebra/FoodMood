import { Box, Button } from "@chakra-ui/react";
import React from "react";

export interface DayNumberProps {
  number: number;
  isActive?: boolean;
}

const DayNumber = ({ number, isActive }: DayNumberProps) => {
  return (
    <Box
      border="1px solid #707070"
      display="flex"
      w={isActive ? "94px" : "59px"}
      h={isActive ? "94px" : "59px"}
      fontSize={isActive ? "64px" : "lg"}
      fontWeight={isActive ? "normal" : "semibold"}
      color={isActive ? "#FFF" : "#000"}
      lineHeight={1}
      letterSpacing="6px"
      borderRadius="5px"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      backgroundColor={isActive ? "secondary.500" : "#FFF"}
    >
      {number < 10 ? `0${number}` : number}
    </Box>
  );
};

export default DayNumber;
