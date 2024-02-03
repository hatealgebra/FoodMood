import { Box } from "@chakra-ui/react";
import React, { ReactElement } from "react";

import themeDefault from "../../particles/themeDefault";

// const OverlineText = styled.div`
//   &::before {
//     display: inline-block;
//     content: "";
//     position: absolute;
//     border-top: 3px solid ${themeDefault.colors.secondary[500]};
//     width: 40px;
//   }
// `;

const Overline = ({ children }: { children: string | ReactElement }) => {
  return (
    <Box display={"inline-block"}>
      <Box position="relative" top={1}>
        {children}
      </Box>
    </Box>
  );
};

export default Overline;
