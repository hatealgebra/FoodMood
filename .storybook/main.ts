import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: ["../src/components/**/*.stories.@(js|jsx|mjs|ts|tsx|mdx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "@chakra-ui/storybook-addon",
    "@storybook/addon-docs",
  ],
  staticDirs: ["../public"],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  features: {
    emotionAlias: false,
  },
  docs: {
    autodocs: true,
  },
};
export default config;
