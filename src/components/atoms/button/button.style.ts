import {
  defineStyle,
  defineStyleConfig,
  withDefaultColorScheme,
} from "@chakra-ui/react";

const xl = defineStyle({
  fontSize: "lg",
  height: "65px",
});

const lg = defineStyle({
  fontSize: "md",
  height: "50px",
});

const link = defineStyle({
  colorScheme: "secondary",
  border: "none",
});

const buttonStyle = defineStyleConfig({
  baseStyle: {
    borderRadius: "5px",
    loadingText: "Loading...",
    fontFamily: "body",
    fontWeight: "semibold",
    px: 10,
    py: 4,
    letterSpacing: 0.25,
    cursor: "pointer",
  },
  defaultProps: {
    size: "lg",
  },
  sizes: { xl, lg },
  variants: { link },
});

export default buttonStyle;
