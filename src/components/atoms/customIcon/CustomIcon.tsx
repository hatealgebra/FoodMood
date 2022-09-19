import { Icon } from "@chakra-ui/react";
import React from "react";

const CustomIcon = ({
  icon,
  boxSize = 5,
  color = "mono.400",
}: CustomIconProps) => {
  return <Icon as={icon} boxSize={boxSize} color={color} />;
};

interface CustomIconProps {
  icon: any;
  boxSize?: 5 | 10 | 15;
  color?: string;
}

export default CustomIcon;
