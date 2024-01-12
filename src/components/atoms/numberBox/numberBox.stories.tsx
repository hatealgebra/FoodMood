import { Stack } from "@chakra-ui/react";
import NumberBox from "./NumberBox";

export const AllNumberBoxes = () => (
  <Stack>
    <NumberBox number={1} isActive />
    <NumberBox number={2} />
  </Stack>
);

export default {
  component: NumberBox,
  title: "Atoms/Number Box",
};
