import { extendTheme } from "@chakra-ui/react";
import components from "./componentsStyle";

// function getRem(pxUnit: number) {
//   return `${pxUnit / 14}rem`;
// }

const fonts = {
  heading: "PlayFair Display",
  body: "Fira Sans",
};

const typography = {
  weight: {
    thin: 100,
    extra_light: 200,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    black: 800,
  },
};

const fontSizes = {
  xs: "0.694rem",
  sm: "0.833rem",
  md: "1rem",
  lg: "1.2rem",
  xl: "1.44rem",
  "2xl": "1.728rem",
  "3xl": "2.074rem",
  "4xl": "2.448rem",
};

const colors = {
  primary: { 200: "#d0f6e4", 500: "#24c178", 600: "#2a9e68" },
  secondary: { 100: "#ecf0fc", 500: "#4169e1", 600: "#3a5eca" },
  tertiary: { 500: "#00416a", 600: "#195478" },
  success: "#34e065",
  warning: { 500: "#e74c3c", 600: "#eb6a5c" },
  info: "#fddd0e",
  mono: {
    100: "#373737",
    200: "#f2f2f2",
    300: "#cacaca",
    400: "#979797",
    500: "#646464",
  },
  white: "#ffffff",
  black: "#373737",
};

const breakpoints = {
  base: "0px",
  tablet: "400px",
  desktop: "768px",
};

const theme = {
  styles: {
    global: {
      "html, body": {
        padding: 0,
        lineHeight: 1.7,
        fontSize: { base: "14px", md: "15px", lg: "16px" },
        height: "100%",
      },
      span: {
        fontSize: "sm",
        fontWeight: "semibold",
      },
      form: {
        width: "100%",
      },
    },
  },
};

const themeDefault = extendTheme({
  config: { initialColorMode: "light" },
  breakpoints,
  fonts,
  typography,
  colors,
  ...theme,
  components,
  fontSizes,
});

export default themeDefault;
