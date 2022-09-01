import React from "react";
import { render } from "@testing-library/react";

import { ChakraProvider } from "@chakra-ui/react";
import themeDefault from "../@chakra-ui/gatsby-plugin/theme";
import { Provider } from "react-redux";
import store from "../store/store";

export const setupIsolatedComponent = (children: React.ReactNode) => {
  return render(
    <ChakraProvider theme={themeDefault}>{children}</ChakraProvider>
  );
};

export const renderComponent = (component: any) => {
  return render(
    <Provider store={store}>
      {/* <MemoryRouter> */}
      <ChakraProvider theme={themeDefault}>{component})</ChakraProvider>
      {/* </MemoryRouter> */}
    </Provider>
  );
};
