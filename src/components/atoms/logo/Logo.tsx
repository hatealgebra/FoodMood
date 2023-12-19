import React from "react";

import { Image } from "@chakra-ui/react";
import NextImage from "next/image";
import fmlogo from "~assets/FoodMood_logo.svg";

const Logo = ({ width = "150px" }: LogoProps) => {
  return (
    <Image as={NextImage} width={width} src={fmlogo} alt="Food Mood logo" />
  );
};

interface LogoProps {
  width?: string | string[];
}

export default Logo;
