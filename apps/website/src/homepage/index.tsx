import { VStack } from '@chakra-ui/react';
import React from 'react';
import FirstSection from './FirstSection';

interface HomepageProps {
  mobile?: boolean;
}

const Homepage = ({ mobile }: HomepageProps) => {
  return (
    <VStack align="inherit" boxSizing="border-box">
      <FirstSection mobile={mobile} />
      {/* <PopularFood /> */}
      {/* Receipt chalk section */}
      {/* <HamburgerRecipe /> */}
      {/* <LastSection /> */}
    </VStack>
  );
};

export default Homepage;
