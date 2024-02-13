import { Button } from '@chakra-ui/react';
import { useState } from 'react';
import { StoryFn as Story } from '@storybook/react';

import MobileMenu from './MobileMenu';
import { userEvent } from '@storybook/test';

export const MobileMenuExample: Story = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Mobile Menu</Button>
      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};
MobileMenuExample.play = async ({ canvasElement }) => {
  const canvas = canvasElement;
  const openMobileMenuBtn = canvas.querySelector('button');
  await userEvent.click(openMobileMenuBtn);
};

export default {
  component: MobileMenu,
  title: 'Molecules/Mobile Menu',
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};
