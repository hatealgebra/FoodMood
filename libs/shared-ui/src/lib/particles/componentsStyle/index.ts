import Button from './button.style';
import Heading from './heading.style';
import CloseButton from './closeButton.style';

const components = {
  Button,
  Heading,
  // Input,
  // List,
  // Tag,
  Box: {
    variants: {
      dec: {
        backgroundColor: 'mono400',
        position: 'absolute',
        zIndex: -1,
      },
    },
  },
  // Checkbox,
  // Text,
  // Link,
  // Switch,
  CloseButton,
  Menu: {
    parts: ['menu', 'list', 'item'],
    baseStyle: {
      list: { minW: 0, w: '150px', py: 1 },
      item: {
        fontSize: 'sm',
      },
    },
  },
  // Tooltip,
};

export default components;
