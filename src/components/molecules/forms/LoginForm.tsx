import React from "react";
import "firebase/auth";

import { Formik, Field, Form, FormikProps } from "formik";
import { Button, Text, VStack, Link } from "@chakra-ui/react";
import { Link as GatsbyLink } from "gatsby";

import FormikInput from "../../atoms/input/Input";

import { loginUser } from "../../../store/thunks/authentication.thunks";
import { LoginCredentials } from "../../../types/async.types";

import * as routerConstantClass from "../../../utils/constants/router.constants";
import { useAppDispatch } from "../../../store/hooks";
import { IFieldInput } from "../../../types/utils.types";
import { getAuth } from "firebase/auth";

const LoginForm = ({ onSubmit }: { onSubmit?: (values: any) => void }) => {
  const dispatch = useAppDispatch();
  const user = getAuth();

  const initialValues: LoginCredentials = {
    email: "",
    psw: "",
  };

  const logOnSubmit = async (values: typeof initialValues, actions: any) => {
    const { email, psw } = values;
    await dispatch(loginUser({ email, psw }));
    if (user.currentUser !== null) {
      // FIXME how to redirect nicely?
      // window.location = "/";
    }
    actions.resetForm();
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
              {({ field, form }: IFieldInput) => (
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
              {({ field, form }: IFieldInput) => (
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
            <Button type="submit" colorScheme="secondary" width="100%">
              Login
            </Button>
            <Text alignSelf="flex-start" as="span" variant="small">
              Not registered yet?
              <Link
                as={GatsbyLink}
                to={routerConstantClass.ROUTE_WEB.REGISTER_PAGE}
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
