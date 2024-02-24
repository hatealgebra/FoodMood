'use client';

import React from 'react';

import { Box, VStack } from '@chakra-ui/react';

import Loading from './loading';
import { useAuthChanged } from 'data-access-app-redux';
import { Props } from 'next/script';
import { AppNavbar } from 'feature-app';
import { AppSection } from 'ui-shared';

interface AppPageProps {
  children: React.ReactNode;
}

const AppPage = ({ children }: AppPageProps) => {
  const { isAuthenticating, user, router } = useAuthChanged();

  if (isAuthenticating) {
    return <Loading />;
  }

  if (!user) {
    return router.push();
  }

  return (
    <VStack pb={20} minHeight="60vh">
      <AppSection yAxisMinus hideHeading>
        <AppNavbar />
      </AppSection>
      {children}
      <ModalRecipe />
    </VStack>
  );
};

export default AppPage;
