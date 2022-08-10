import React, { useState } from "react";
import { Radio, RadioGroup, Stack } from "@chakra-ui/react";

const RadioBtnGroup = ({
  action,
  initialValue,
  radioValues,
  direction,
}: RadioBtnsProps) => {
  const [value, setValue] = useState(initialValue || "");
  return (
    <RadioGroup onChange={setValue} value={value}>
      <Stack direction={direction}>
        {radioValues.map((radioValue) => (
          <Radio
            colorScheme="primary"
            key={`radio nr. ${radioValue[0]}`}
            value={radioValue[0]}
          >
            {radioValue[1]}
          </Radio>
        ))}
      </Stack>
    </RadioGroup>
  );
};

export interface RadioBtnsProps {
  action?: () => void;
  initialValue?: any;
  radioValues: [any, string][];
  direction?: "column" | "row";
}

export default RadioBtnGroup;
