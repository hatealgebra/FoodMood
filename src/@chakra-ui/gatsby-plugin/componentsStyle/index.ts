import Button from "../../../components/atoms/button/button.style";
import Checkbox from "../../../components/atoms/checkbox/checkbox.style";
import Tag from "../../../components/atoms/tag/tag.style";
import CloseButton from "../../../components/atoms/button/closeButton.style";

import Input from "../../../components/atoms/input/input.styled";
import Text from "./textStyle";
import Switch from "../../../components/atoms/toggleBtn/toggleBtn.style";
import Heading from "../../../components/atoms/heading/heading.style";
import List from "../../../components/atoms/list/list.style";
import Link from "./linkStyle";
import Tooltip from "../../../components/atoms/TooltipInfo/tooltip.style";

const components = {
  Button,
  Heading,
  Input,
  List,
  Tag,
  Box: {
    variants: {
      dec: {
        backgroundColor: "mono400",
        position: "absolute",
        zIndex: -1,
      },
    },
  },
  Checkbox,
  Text,
  Link,
  Switch,
  CloseButton,
  Menu: {
    parts: ["menu", "list", "item"],
    baseStyle: {
      list: { minW: 0, w: "150px", py: 1 },
      item: {
        fontSize: "sm",
      },
    },
  },
  Tooltip,
};

export default components;
