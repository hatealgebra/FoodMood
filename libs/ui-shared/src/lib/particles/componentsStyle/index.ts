import Button from './button.style';
import Heading from './heading.style';
import CloseButton from './closeButton.style';
import Checkbox from './checkbox.style';
import Input from './input.style';
import List from './list.style';
import Link from './link.style';
import Tag from './tag.style';
import Switch from './switch.style';
import Tooltip from './tooltip.style';
import Text from './text.style';

const components = {
  Button,
  Heading,
  Input,
  List,
  Tag,
  Box: {
    variants: {
      dec: {
        backgroundColor: 'mono400',
        position: 'absolute',
        zIndex: -1,
      },
    },
  },
  Text,
  Link,
  Switch,
  Checkbox,
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
  Tooltip,
};

export default components;
