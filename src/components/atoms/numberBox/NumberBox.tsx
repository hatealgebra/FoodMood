import { Box } from "@chakra-ui/react";
import React from "react";

export interface NumberBoxProps {
  number: number;
  isActive?: boolean;
}

const NumberBox = ({ number, isActive }: NumberBoxProps) => {
  return (
    <Box
      border="1px solid #707070"
      aspectRatio={1}
      w={isActive ? "94px" : "59px"}
      fontSize={isActive ? "64px" : "lg"}
      fontWeight={isActive ? "normal" : "semibold"}
      color={isActive ? "#FFF" : "#000"}
      lineHeight={1}
      letterSpacing="6px"
      display="flex"
      borderRadius="5px"
      textAlign="center"
      placeItems="center"
      justifyContent="center"
      backgroundColor={isActive ? "secondary.500" : "#FFF"}
    >
      {number < 10 ? `0${number}` : number}
    </Box>
  );
};

export default NumberBox;
