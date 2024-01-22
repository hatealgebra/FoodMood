import { Stack } from "@chakra-ui/react";
import DayButton from "./DayButton";

export const AllDayButtones = () => (
  <Stack>
    <DayButton number={1} isActive />
    <DayButton number={2} />
  </Stack>
);

export default {
  component: DayButton,
  title: "Atoms/DayButton",
};
