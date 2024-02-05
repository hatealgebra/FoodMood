import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';
import viteConfig from '../vite.config';

const config: StorybookConfig = {
  stories: ['../src/lib/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@chakra-ui/storybook-addon',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  features: {
    emotionAlias: false,
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      ...viteConfig,
    });
  },
};

export default config;

// To customize your Vite configuration you can use the viteFinal field.
// Check https://storybook.js.org/docs/react/builders/vite#configuration
// and https://nx.dev/recipes/storybook/custom-builder-configs
