'use client';

import { ChakraProvider } from '@chakra-ui/react';
import store from 'data-access-app-redux';
import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { theme } from 'ui-shared';

const providers = ({ children }: { children: ReactNode }) => {
  return (
    <Provider store={store}>
      <ChakraProvider resetCSS theme={theme}>
        {children}
      </ChakraProvider>
    </Provider>
  );
};

export default providers;
