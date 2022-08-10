import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { Provider } from "react-redux";
import themeDefault from "./src/components/particles/themeDefault";
import store from "./src/store/store";

export const wrapRootElement = ({ element }) => {
  return (
    <Provider store={store}>
      <ChakraProvider resetCSS theme={themeDefault}>
        {element}
      </ChakraProvider>
    </Provider>
  );
};
