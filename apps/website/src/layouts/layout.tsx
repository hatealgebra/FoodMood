import { Box } from '@chakra-ui/react';
import React from 'react';
import TopPanel from '../components/topPanel/TopPanel';
import Footer from '../components/footer/Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const layout = ({ children }: LayoutProps) => {
  return (
    <main>
      <TopPanel />
      <Box m="10vh auto">{children}</Box>
      <Footer />
    </main>
  );
};

export default layout;
