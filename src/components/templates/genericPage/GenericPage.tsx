import { Box } from "@chakra-ui/react";
import React from "react";
import Footer from "../../organisms/footer/Footer";
import TopPanel from "../../organisms/topPanel/TopPanel";
import useWindowSize, { WindowSize } from "../../../utils/hooks/useWindowSize";
import { Props } from "framer-motion/types/types";

const GenericPage: React.FC<Props> = ({ children }) => {
  const deviceSize: WindowSize = useWindowSize();

  return (
    <Box position="relative" overflow="hidden">
      <TopPanel
        device={
          deviceSize.width! > 400 && deviceSize.width! < 769
            ? "tablet"
            : deviceSize.width! > 769
            ? "desktop"
            : "mobile"
        }
      />
      <Box mt="50px">{children}</Box>
      <Footer />
    </Box>
  );
};

export const BlogPage: React.FC<Props> = ({ children }) => {
  return (
    <GenericPage>
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
    </GenericPage>
  );
};

export default GenericPage;
