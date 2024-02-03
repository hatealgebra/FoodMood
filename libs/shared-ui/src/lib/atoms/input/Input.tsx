import React, { ReactElement } from 'react';

import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';

const FormikInput = ({
  label,
  type,
  placeholder,
  icon,
  field,
  id,
  isRequired,
  isInvalid,
  isDisabled,
}: FormikInputProps) => {
  return (
    <FormControl isRequired={isRequired} isInvalid={isInvalid}>
      <FormLabel
        textTransform="capitalize"
        fontWeight="400"
        fontSize="lg"
        m="0 0 0 5px"
      >
        {label}
      </FormLabel>
      <InputGroup size="md" name={id}>
        {icon && (
          <InputLeftElement>
            <IconButton
              type="submit"
              variant="none"
              aria-label={'input-button'}
              icon={icon}
            />
          </InputLeftElement>
        )}
        <Input
          id={id}
          aria-label={id}
          {...field}
          isDisabled={isDisabled}
          borderRadius="5px"
          placeholder={placeholder}
          type={type}
        />
      </InputGroup>
      <FormErrorMessage>{isInvalid}</FormErrorMessage>
    </FormControl>
  );
};

export interface FormikInputProps {
  label?: string;
  placeholder?: string;
  icon?: ReactElement;
  type: 'password' | 'email' | 'text';
  field?: object;
  form?: object;
  id: string;
  isRequired?: boolean;
  isInvalid?: boolean;
  isDisabled?: boolean;
}

export default FormikInput;
