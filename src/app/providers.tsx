"use client";

import { ChakraProvider } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { Provider } from "react-redux";
import themeDefault from "~particles/themeDefault";
import store from "~store/store";
import GenericPage from "~templates/genericPage/GenericPage";

const providers = ({ children }: { children: ReactNode }) => {
  return (
    <Provider store={store}>
      <ChakraProvider resetCSS theme={themeDefault}>
        <GenericPage>{children}</GenericPage>
      </ChakraProvider>
    </Provider>
  );
};

export default providers;
