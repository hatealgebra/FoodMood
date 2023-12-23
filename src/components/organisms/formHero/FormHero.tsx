"use client";

import React from "react";

import {
  Box,
  Flex,
  Image,
  Text,
  createStandaloneToast,
  Button,
  Heading,
} from "@chakra-ui/react";
import NextImage from "next/image";

import { FcGoogle } from "react-icons/fc";
import FormContainer from "~molecules/formContainer/FormContainer";
import CustomDivider from "~atoms/customDivider/CustomDivider";
import LoginForm from "~molecules/forms/LoginForm";
import SignupForm from "~molecules/forms/SignupForm";

const loginGoogleUnavalaible = () => {
  const { toast } = createStandaloneToast();
  toast({
    title: "This method is currently unavalible",
    description:
      "We are sorry, but we are currently working on Google login provider. Please use email/password verification.",
    position: "top",
    status: "warning",
    isClosable: true,
  });
};

const FormHero = ({ variant, imageSrc }: FormHeroProps) => {
  return (
    <FormContainer>
      <Flex maxW="1200px" flexDir="column" flex="1 1 0">
        <Box>
          {variant === "login" ? (
            <>
              <Heading as="h1">Login</Heading>
              <Text maxW={["280px", "100%"]}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Dolorem, dicta?
              </Text>{" "}
            </>
          ) : (
            <>
              <Heading as="h1">Sign Up</Heading>
              <Text maxW="300px">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Dolorem, dicta?
              </Text>{" "}
            </>
          )}
          <Button
            leftIcon={<FcGoogle />}
            variant="outline"
            width="full"
            onClick={() => loginGoogleUnavalaible()}
          >
            Sign In with the Google
          </Button>
          <CustomDivider>
            {variant === "login"
              ? "or sign in with email"
              : "or sign up with enail"}
          </CustomDivider>
        </Box>
        <Box flex="1 1 0">
          {variant === "signup" ? <SignupForm /> : <LoginForm />}
        </Box>
      </Flex>
      <Image
        as={NextImage}
        my={16}
        src={imageSrc}
        alt={imageSrc}
        maxWidth="450px"
        mx={{ md: 5 }}
        flex="50%"
      />
    </FormContainer>
  );
};

interface FormHeroProps {
  variant: "login" | "signup";
  imageSrc: string;
}

export default FormHero;
