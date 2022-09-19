import React from "react";

import { VStack, Wrap } from "@chakra-ui/react";
import CustomIcon from "./CustomIcon";
import { GrFacebook, GrLinkedin, GrInstagram } from "react-icons/gr";
import { MdTimer } from "react-icons/md";

export const AllIcons = () => (
  <VStack spacing={10} align="flex-start">
    <Wrap>
      <CustomIcon icon={GrFacebook} color="secondary" />
      <CustomIcon icon={GrInstagram} color="secondary" />
      <CustomIcon icon={GrLinkedin} color="secondary" />
    </Wrap>
    <Wrap>
      <CustomIcon icon={MdTimer} />
    </Wrap>
  </VStack>
);

export default {
  component: CustomIcon,
  title: "Atoms/Icon",
};
