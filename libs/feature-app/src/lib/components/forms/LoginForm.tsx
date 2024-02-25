'use client';
import 'firebase/auth';

import { Formik, Field, Form, FormikProps } from 'formik';
import { Button, Link, Text, VStack } from '@chakra-ui/react';
import NextLink from 'next/link';

import { useRouter } from 'next/router';
import { loginUser, useAppDispatch } from 'data-access-app-redux';
import { LoginCredentials } from 'util-types';
import { ROUTES_APP } from '../../route.constants';
import { FormikInput, FormikInputProps } from 'ui-shared';

const LoginForm = ({ onSubmit }: { onSubmit?: (values: any) => void }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const initialValues: LoginCredentials = {
    email: '',
    psw: '',
  };

  const logOnSubmit = async (values: typeof initialValues, actions: any) => {
    const { email, psw } = values;

    try {
      await dispatch(loginUser({ email, psw }));
      return router.push(ROUTES_APP.HOME_PAGE.path);
    } catch (e) {
      console.log(e);
    } finally {
      actions.resetForm();
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        onSubmit ? onSubmit(values) : logOnSubmit(values, actions);
      }}
    >
      {(props: FormikProps<any>) => (
        <Form aria-label="login-form">
          <VStack spacing={3}>
            <Field name="email">
              {({ field }: FormikInputProps) => (
                <FormikInput
                  isRequired
                  field={field}
                  label="email"
                  id="email"
                  type="email"
                />
              )}
            </Field>
            <Field name="psw">
              {({ field }: FormikInputProps) => (
                <FormikInput
                  isRequired
                  field={field}
                  label="Password"
                  aria-label="psw"
                  id="psw"
                  type="password"
                />
              )}
            </Field>
            <Link alignSelf="flex-end" variant="classic">
              Forgot password?
            </Link>
            <Button type="submit" colorScheme="secondary" width="full">
              Login
            </Button>
            <Text alignSelf="flex-start" as="span" variant="small">
              Not registered yet?
              <Link
                as={NextLink}
                href={ROUTES_APP.SIGNUP_PAGE.path}
                mx={1}
                variant="classic"
              >
                Create an account.
              </Link>
            </Text>
          </VStack>
        </Form>
      )}
    </Formik>
  );
};
export default LoginForm;
