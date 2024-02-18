import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const xl = defineStyle({
  fontSize: 'lg',
  height: '65px',
});

const lg = defineStyle({
  fontSize: 'md',
  height: '50px',
});

const sm = defineStyle({
  fontSize: 'xs',
  px: 2,
  py: 2.5,
});

const link = defineStyle({
  colorScheme: 'secondary',
  border: 'none',
});

const buttonStyle = defineStyleConfig({
  baseStyle: {
    borderRadius: '5px',
    loadingText: 'Loading...',
    fontFamily: 'body',
    fontWeight: 'semibold',
    px: 10,
    py: 4,
    letterSpacing: 0.25,
    cursor: 'pointer',
  },
  defaultProps: {
    size: 'lg',
    colorScheme: 'primary',
  },
  sizes: { xl, lg, sm },
  variants: { link },
});

export default buttonStyle;
