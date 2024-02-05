import type { Preview } from '@storybook/react';
import themeDefault from '../src/lib/particles/themeDefault';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    chakra: {
      theme: themeDefault,
    },
    tags: ['autodocs'],
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
