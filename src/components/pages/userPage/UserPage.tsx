import React, { useEffect, useState } from "react";

import { getAuth, User } from "firebase/auth";
import { Field, Form, Formik } from "formik";

import AppSection from "../../molecules/appSection/AppSection";

import { useAppDispatch } from "../../../store/hooks";
import {
  deleteUserAcc,
  updateUser,
} from "../../../store/thunks/authentication.thunks";
import { VStack, Text, SimpleGrid, Button } from "@chakra-ui/react";
import FormikInput from "../../atoms/input/Input";
import UploadAvatar from "../../molecules/uploadAvatar/UploadAvatar";
import AlertDelete from "../../molecules/alertDelete/AlertDelete";

import { IFieldInput } from "../../../types/utils.types";
import AppPage from "~app/app/layout";
import { deleteAllRecipes } from "~services/firebase/firestore.services";

const UserPage = () => {
  const dispatch = useAppDispatch();
  const auth = getAuth();
  const { uid, email, displayName, photoURL } =
    auth.currentUser || ({} as User);

  const initValues = {
    uid,
    email,
    displayName,
    photoURL,
  };

  const updateBio = (values: typeof initValues, actions: any) => {
    dispatch(updateUser(values));
    actions.resetForm();
  };

  return (
    <AppPage>
      <SimpleGrid
        templateColumns={{ base: "1fr", md: "1fr 1fr" }}
        spacingX={10}
        spacingY={5}
      >
        <AppSection headingOne="User" headingTwo="Settings">
          <Formik
            initialValues={initValues}
            onSubmit={(values, actions) => updateBio(values, actions)}
          >
            {(props) => (
              <Form
                id="updateBio"
                aria-label="update-bio-form"
                className="dropzone"
              >
                <VStack spacing={5} my={3} maxW="300px">
                  <UploadAvatar uid={uid} photoURL={photoURL || ""} />
                  <Field name="email">
                    {({ field, form }: IFieldInput) => (
                      <FormikInput
                        isDisabled
                        field={field}
                        label="email"
                        id="email"
                        type="email"
                      />
                    )}
                  </Field>
                  <Field name="displayName">
                    {({ field, form }: IFieldInput) => (
                      <FormikInput
                        field={field}
                        label="Display name"
                        id="displayName"
                        type="text"
                      />
                    )}
                  </Field>
                  <Button colorScheme="primary">Save new data</Button>
                </VStack>
              </Form>
            )}
          </Formik>
        </AppSection>
        <VStack spacing={10}>
          <AppSection headingOne="Delete" headingTwo="Saved Recipes">
            <Text maxW="350px">
              If you want to delete all saved recipes, just click on the button
              below.
            </Text>
            <AlertDelete
              action={() => deleteAllRecipes(uid)}
              button="Delete recipes"
              heading={"Delete all recipes"}
            >
              Are you sure you want delete all recipes?
            </AlertDelete>
          </AppSection>
          <AppSection headingOne="Delete" headingTwo="account">
            <Text maxW="350px">
              Here you can delete account and all of your data from our
              databases. This action is irreversible.
            </Text>
            <AlertDelete
              action={() => dispatch(deleteUserAcc(getAuth().currentUser))}
              button="Delete acount"
              heading="Delete user account"
            >
              Are you sure you want to delete your account?
            </AlertDelete>
          </AppSection>
        </VStack>
      </SimpleGrid>
    </AppPage>
  );
};

export default UserPage;
