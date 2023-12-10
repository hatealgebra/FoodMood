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

import { FcGoogle } from "react-icons/fc";
import FormContainer from "../../molecules/formContainer/FormContainer";
import CustomDivider from "../../atoms/customDivider/CustomDivider";
import LoginForm from "../../molecules/forms/LoginForm";
import SignupForm from "../../molecules/forms/SignupForm";

const loginGoogleUnavalaible = () => {
  const toast = createStandaloneToast();
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
      <Flex
        maxW="400px"
        flexDir="column"
        m={{ base: "0 0 10px 0", md: "0 50px 0 0" }}
      >
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
            isFullWidth
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
        {variant === "signup" ? <SignupForm /> : <LoginForm />}
      </Flex>
      <Image
        my={16}
        src={imageSrc}
        alt={imageSrc}
        maxWidth="450px"
        flex="2 2 0"
        mx={{ md: 5 }}
      />
    </FormContainer>
  );
};

interface FormHeroProps {
  variant: "login" | "signup";
  imageSrc: string;
}

export default FormHero;
