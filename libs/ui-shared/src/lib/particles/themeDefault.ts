import { extendTheme } from '@chakra-ui/react';
import components from './componentsStyle';

import '@fontsource/fira-sans/200.css';
import '@fontsource/fira-sans/400.css';
import '@fontsource/fira-sans/500.css';
import '@fontsource/fira-sans/600.css';
import '@fontsource/homemade-apple/400.css';

// TODO: Add yarn workspaces to solve the allow list

const fonts = {
  heading: 'PlayFair Display, sans-serif',
  body: 'Fira Sans, sans-serif',
  chalk: 'Homemade Apple, cursive',
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
  xs: '0.694rem',
  sm: '0.833rem',
  md: '1rem',
  lg: '1.2rem',
  xl: '1.44rem',
  '2xl': '1.728rem',
  '3xl': '2.074rem',
  '4xl': '2.448rem',
};

const colors = {
  primary: { 200: '#d0f6e4', 500: '#24c178', 600: '#2a9e68' },
  secondary: { 100: '#ecf0fc', 500: '#4169e1', 600: '#3a5eca' },
  tertiary: { 500: '#00416a', 600: '#195478' },
  success: '#34e065',
  warning: { 500: '#e74c3c', 600: '#eb6a5c' },
  info: '#fddd0e',
  mono: {
    100: '#373737',
    200: '#f2f2f2',
    300: '#cacaca',
    400: '#979797',
    500: '#646464',
  },
  white: '#ffffff',
  black: '#373737',
};

const breakpoints = {
  base: '0px',
  tablet: '400px',
  desktop: '768px',
};

const theme = {
  styles: {
    global: {
      'html, body': {
        padding: 0,
        lineHeight: 1.7,
        fontSize: { base: '14px', md: '15px', lg: '16px' },
        height: '100%',
      },
      span: {
        fontSize: 'sm',
        fontWeight: 'semibold',
      },
      form: {
        width: '100%',
      },
      '.react-datepicker-wrapper': {
        display: 'none !important',
      },
      '.react-datepicker__tab-loop': {
        position: 'static !important',
      },
      '.react-datepicker-popper': {
        zIndex: '9999 !important',
        inset: 'unset !important',
        left: '50% !important',
        transform: 'translateX(-50%) !important',
        top: '0 !important',
      },
    },
  },
};

const themeDefault = extendTheme({
  config: { initialColorMode: 'light' },
  breakpoints,
  fonts,
  typography,
  colors,
  ...theme,
  components,
  fontSizes,
});

export default themeDefault;
