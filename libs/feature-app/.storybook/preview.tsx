import { Preview } from '@storybook/react';
import { Provider } from 'react-redux';
import { theme } from 'ui-shared';
import store from 'data-access-app-redux';

const preview: Preview = {
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    chakra: {
      theme: theme,
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
