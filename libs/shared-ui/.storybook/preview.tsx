import React from 'react';
import type { Preview } from '@storybook/react';
import theme from '../../../src/components/particles/themeDefault';
import { initialize, mswLoader } from 'msw-storybook-addon';
import { Provider } from 'react-redux';
import store from '../../../src/store/store';
import { handlers } from '../../../src/mocks/handlers';

import '@fontsource/fira-sans/200.css';
import '@fontsource/fira-sans/400.css';
import '@fontsource/fira-sans/500.css';
import '@fontsource/fira-sans/600.css';
import '@fontsource/playfair-display/variable.css';

// Initialize MSW
initialize();

const globalWrapper = (Story) => (
  <Provider store={store}>
    <Story />
  </Provider>
);

const preview: Preview = {
  decorators: [globalWrapper],
  loaders: [mswLoader],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    chakra: {
      theme,
    },
    tags: ['autodocs'],
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    msw: { handlers },
  },
};

export default preview;
