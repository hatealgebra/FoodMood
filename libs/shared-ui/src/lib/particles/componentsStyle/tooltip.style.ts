import { TooltipProps, defineStyle, defineStyleConfig } from "@chakra-ui/react";

const whiteVariant = defineStyle({
  bg: "#fff",
  color: "#color",
});

const Tooltip = defineStyleConfig({
  baseStyle: {
    color: "black",
    fontWeight: 400,
    bg: "mono400",
    fontSize: "xs",
    px: 4,
    py: 2,
    boxShadow: 0,
  },
  variants: {
    white: whiteVariant,
  },
  defaultProps: {
    placement: "bottom",
    variant: "white",
  },
});

export default Tooltip;
