import React from 'react';

import { Field, Form, Formik, FormikFormProps } from 'formik';
import { Box, Button, Link, SimpleGrid, Text } from '@chakra-ui/react';
import NextLink from 'next/link';

import * as routeConstantClass from '~constants/router.constants';

const validate = (values: SignupFormValues): SignupFormValues => {
  const passwordRegEx = new RegExp(
    '^(?=.*[A-Z]+)(?=.*[0-9]+)[a-zA-Z0-9]{8,20}$',
    'g',
  );

  const errors = {} as SignupFormValues;

  if (!/^[a-z]+\s[a-z]+$/gi.test(values.name)) {
    errors.name = 'Correct format is: Forename Surname';
  }

  if (!passwordRegEx.test(values.password) && values.password) {
    errors.password = 'Password is not secure enough!';
  } else if (values.passwordAgain && values.password !== values.passwordAgain) {
    errors.passwordAgain = 'Passwords are different!';
  }
  return errors;
};

const SignupForm = ({ onSubmit }: { onSubmit?: (values: any) => void }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const initialValues: SignupFormValues = {
    name: '',
    email: '',
    password: '',
    passwordAgain: '',
  };

  const signUp = async (values: SignupFormValues, actions: any) => {
    const { email, password, name } = values;
    const capitalizeName = name
      .split(' ')
      .map((name) => {
        name.substring(1).toUpperCase();
        return name;
      })
      .join(' ');

    const response = await dispatch(
      createUser({ email, psw: password, name: capitalizeName }),
    );

    if (!response) {
      return actions.resetForm({
        values: { email, name, password: '', passwordAgain: '' },
      });
    }
    return router.push(routerConstantClass.ROUTE_APP.APP_HOME_PAGE);
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
              <Text alignSelf="flex-start" as="span" variant="small">
                Already have an account?
                <Link
                  as={NextLink}
                  href={routeConstantClass.ROUTE_WEB.LOGIN_PAGE}
                  mx={1}
                  variant="classic"
                >
                  Sign in.
                </Link>
              </Text>
            </Box>
            <Button type="submit" colorScheme="secondary" isFullWidth>
              Sign Up
            </Button>
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

export default SignupForm;
