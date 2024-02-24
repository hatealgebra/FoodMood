import React, { useState } from 'react';

import { Flex, Switch, FormLabel } from '@chakra-ui/react';

const ToggleBtn = ({
  id,
  direction,
  children,
  initialValue,
}: ToggleBtnProps) => {
  const [isChecked, setChecked] = useState(initialValue || false);
  return (
    <Flex direction={direction}>
      <FormLabel htmlFor={id}>{children}</FormLabel>
      <Switch
        onChange={() => setChecked((prevState) => !prevState)}
        isChecked={isChecked}
        id={id}
      />
    </Flex>
  );
};

export interface ToggleBtnProps {
  id: string;
  direction?: 'column' | 'row';
  initialValue?: boolean;
  children: string;
}

export default ToggleBtn;
