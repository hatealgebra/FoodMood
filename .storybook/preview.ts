import type { Preview } from "@storybook/react";
import theme from "../src/components/particles/themeDefault"

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    chakra: {
      theme
    }
  },
};

export default preview;
