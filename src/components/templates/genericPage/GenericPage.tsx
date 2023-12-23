"use client";
import { Box } from "@chakra-ui/react";
import React from "react";

import { Props } from "framer-motion/types/types";

export const BlogContainer: React.FC<Props> = ({ children }) => {
  return (
    <Box
      margin="auto"
      py={{ base: "3vw" }}
      width="90%"
      maxW="800px"
      sx={{
        h3: { fontSize: "lg" },
        ul: { paddingLeft: "30px" },
        p: { maxW: "600px", w: "85%" },
      }}
    >
      {children}
    </Box>
  );
};
