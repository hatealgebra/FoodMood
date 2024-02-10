import { Button } from '@chakra-ui/react';
import { useState } from 'react';

import MobileMenu from './MobileMenu';

export const MobileMenuExample = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Mobile Menu</Button>
      {/* <MobileMenu isOpen={isOpen} /> */}
    </>
  );
};

export default {
  component: MobileMenu,
  title: 'Molecules/Mobile Menu',
};
