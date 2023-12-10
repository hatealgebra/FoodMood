import { createStandaloneToast } from "@chakra-ui/react";
import themeDefault from "../components/particles/themeDefault";

const DURATION = 3000;

export const showError = async (error: Error) => {
  const toast = createStandaloneToast({ theme: themeDefault });
  toast({
    title: error.name,
    description: error.message,
    status: "warning",
    duration: DURATION,
    isClosable: true,
  });
};

export const showSuccess = async (title: string, description: string) => {
  const toast = createStandaloneToast({ theme: themeDefault });
  toast({
    title,
    description,
    status: "success",
    duration: DURATION,
    isClosable: true,
    position: "top",
  });
};
