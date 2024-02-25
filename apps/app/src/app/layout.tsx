'use client';

import React from 'react';

import { Box, ChakraProvider, VStack } from '@chakra-ui/react';

import Loading from './loading';
import store, { useAuthChanged } from 'data-access-app-redux';
import { Props } from 'next/script';
import { AppNavbar } from 'feature-app';
import { AppSection, theme } from 'ui-shared';
import { Provider } from 'react-redux';

interface AppPageProps {
  children: React.ReactNode;
}

const AppPage = ({ children }: AppPageProps) => {
  // const { isAuthenticating, user, router } = useAuthChanged();

  // if (isAuthenticating) {
  // return <Loading />;
  // }

  // if (!user) {
  // return router.push();
  // }

  return (
    <html>
      <body>
        <ChakraProvider theme={theme}>
          <Provider store={store}>
            <VStack pb={20} minHeight="60vh">
              <AppSection yAxisMinus hideHeading>
                <AppNavbar />
              </AppSection>
              {children}
              {/* <ModalRecipe /> */}
            </VStack>
          </Provider>
        </ChakraProvider>
      </body>
    </html>
  );
};

export default AppPage;
