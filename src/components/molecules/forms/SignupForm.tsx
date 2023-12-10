import React from "react";

import { Field, Form, Formik, FormikFormProps } from "formik";
import { Box, Button, Link, SimpleGrid, Text } from "@chakra-ui/react";
import { Link as LinkRouter, useNavigate } from "react-router-dom";

import * as routeConstantClass from "../../../utils/constants/router.constants";

import FormikInput from "../../atoms/input/Input";

import { useAppDispatch } from "../../../store/hooks";
import { createUser } from "../../../store/thunks/authentication.thunks";
import { IFieldInput } from "../../../types/utils.types";

const SignupForm = ({ onSubmit }: { onSubmit?: (values: any) => void }) => {
  const dispatch = useAppDispatch();
  const initialValues: SignupFormValues = {
    name: "",
    email: "",
    password: "",
    passwordAgain: "",
  };

  const signUp = async (values: SignupFormValues, actions: any) => {
    const { email, password, name } = values;
    const capitalizeName = name
      .split(" ")
      .map((name) => {
        name.substring(1).toUpperCase();
        return name;
      })
      .join(" ");
    dispatch(createUser({ email, psw: password, name: capitalizeName }));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={(values, actions) => {
        onSubmit ? onSubmit(values) : signUp(values, actions);
      }}
      validateOnChange={false}
    >
      {(props: FormikFormProps) => (
        <Form aria-label="signup-form">
          <SimpleGrid spacing={3}>
            <Field name="name">
              {({ field, form }: IFieldInput) => (
                <FormikInput
                  isRequired
                  field={field}
                  label="name"
                  id="name"
                  type="text"
                  isInvalid={form.errors.name}
                />
              )}
            </Field>
            <Field name="email">
              {({ field, form }: IFieldInput) => (
                <FormikInput
                  isRequired
                  field={field}
                  label="Email"
                  id="email"
                  type="email"
                />
              )}
            </Field>
            <Field name="password">
              {({ field, form }: IFieldInput) => (
                <FormikInput
                  isRequired
                  field={field}
                  label="Password"
                  id="password"
                  type="password"
                  isInvalid={form.errors.password}
                />
              )}
            </Field>
            <Field name="passwordAgain">
              {({ field, form }: IFieldInput) => (
                <FormikInput
                  isRequired
                  field={field}
                  label="Password again"
                  id="passwordAgain"
                  type="password"
                  isInvalid={form.errors.passwordAgain}
                />
              )}
            </Field>
            <Box>
              <Link alignSelf="flex-end" variant="classic">
                Forgot password?
              </Link>
              <Button type="submit" colorScheme="secondary" isFullWidth>
                Sign Up
              </Button>
              <Text alignSelf="flex-start" as="span" variant="small">
                Already have an account?
                <Link
                  as={LinkRouter}
                  to={routeConstantClass.ROUTE_WEB.LOGIN_PAGE}
                  mx={1}
                  variant="classic"
                >
                  Sign in.
                </Link>
              </Text>
            </Box>
          </SimpleGrid>
        </Form>
      )}
    </Formik>
  );
};
interface SignupFormValues {
  name: string;
  email: string;
  password: string;
  passwordAgain: string;
}

const validate = (values: SignupFormValues): SignupFormValues => {
  const passwordRegEx = new RegExp(
    "^(?=.*[A-Z]+)(?=.*[0-9]+)[a-zA-Z0-9]{8,20}$",
    "g"
  );

  const errors = {} as SignupFormValues;

  if (!/^[a-z]+\s[a-z]+$/gi.test(values.name)) {
    errors.name = "Correct format is: Forename Surname";
  }

  if (!passwordRegEx.test(values.password) && values.password) {
    errors.password = "Password is not secure enough!";
  } else if (values.passwordAgain && values.password !== values.passwordAgain) {
    errors.passwordAgain = "Passwords are different!";
  }
  return errors;
};

export default SignupForm;
