import { VStack } from '@chakra-ui/react';
import FirstSection from '../components/homepage/FirstSection';
import PopularFoodSection from '../components/homepage/PopularFoodSection';
import HamburgerRecipe from '../components/homepage/HamburgerRecipe';
import LastSection from '../components/homepage/LastSection';

interface HomepageProps {
  mobile?: boolean;
}

const Homepage = ({ mobile }: HomepageProps) => {
  return (
    <VStack align="inherit" boxSizing="border-box">
      <FirstSection mobile={mobile} />
      <PopularFoodSection />
      <HamburgerRecipe />
      <LastSection />
    </VStack>
  );
};

export default Homepage;
