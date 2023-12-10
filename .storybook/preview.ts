import type { Preview } from "@storybook/react";
import theme from "../src/components/particles/themeDefault";
import { initialize, mswLoader } from "msw-storybook-addon";

import "@fontsource/fira-sans/400.css";
import "@fontsource/fira-sans/500.css";
import "@fontsource/fira-sans/600.css";
import "@fontsource/playfair-display/variable.css";

// Initialize MSW
initialize();

const preview: Preview = {
  parameters: {
    loaders: [mswLoader],
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    chakra: {
      theme,
    },
  },
};

export default preview;
