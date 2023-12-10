import React from "react";
import "firebase/auth";

import { Formik, Field, Form, FormikProps } from "formik";
import { Button, Link, Text, VStack } from "@chakra-ui/react";
import { Link as LinkRouter, useNavigate } from "react-router-dom";

import FormikInput from "../../atoms/input/Input";

import { loginUser } from "../../../store/thunks/authentication.thunks";
import { LoginCredentials } from "../../../types/async.types";

import * as routerConstantClass from "../../../utils/constants/router.constants";
import { useAppDispatch } from "../../../store/hooks";
import { IFieldInput } from "../../../types/utils.types";
import { getAuth } from "firebase/auth";

const LoginForm = ({ onSubmit }: { onSubmit?: (values: any) => void }) => {
  const dispatch = useAppDispatch();
  let navigate = useNavigate();
  const user = getAuth();

  const initialValues: LoginCredentials = {
    email: "",
    psw: "",
  };

  const logOnSubmit = async (values: typeof initialValues, actions: any) => {
    const { email, psw } = values;
    await dispatch(loginUser({ email, psw }));
    if (user.currentUser !== null) {
      navigate(routerConstantClass.ROUTE_APP.APP_HOME_PAGE);
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
            <Button type="submit" colorScheme="secondary" isFullWidth>
              Login
            </Button>
            <Text alignSelf="flex-start" as="span" variant="small">
              Not registered yet?
              <Link
                as={LinkRouter}
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
