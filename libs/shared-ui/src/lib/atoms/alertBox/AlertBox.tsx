import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
} from "@chakra-ui/react";
import React from "react";

const AlertBox = ({ status, children, title }: AlertBoxProps) => {
  return (
    <Alert aria-label="alert-box" m={2} status={status} maxW="500px">
      <AlertIcon />
      <Box w="fit-content">
        <AlertTitle sx={{ textTransform: "capitalize" }}>
          {title || status}
        </AlertTitle>
        <AlertDescription display="block">{children}</AlertDescription>
      </Box>
    </Alert>
  );
};

export interface AlertBoxProps {
  status: "info" | "warning" | "success" | "error";
  children: string;
  title?: string;
}

export default AlertBox;
