import { addDecorator } from "@storybook/react";
import { ChakraProvider } from "@chakra-ui/react";
import themeDefault from "../src/components/particles/themeDefault";
import { Provider } from "react-redux";
import store from "../src/store/store";
import { initialize, mswDecorator } from "msw-storybook-addon";

// Gatsby's Link overrides:
// Gatsby Link calls the `enqueue` & `hovering` methods on the global variable ___loader.
// This global object isn't set in storybook context, requiring you to override it to empty functions (no-op),
// so Gatsby Link doesn't throw errors.
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
};
// This global variable prevents the "__BASE_PATH__ is not defined" error inside Storybook.
global.__BASE_PATH__ = "/";
// Navigating through a gatsby app using gatsby-link or any other gatsby component will use the `___navigate` method.
// In Storybook, it makes more sense to log an action than doing an actual navigate. Check out the actions addon docs for more info: https://storybook.js.org/docs/react/essentials/actions
window.___navigate = (pathname) => {
  action("NavigateTo:")(pathname);
};

const GlobalWrapper = (storyFn) => (
  <Provider store={store}>
    <ChakraProvider resetCSS theme={themeDefault}>
      <div>{storyFn()}</div>
    </ChakraProvider>
  </Provider>
);

initialize();
addDecorator(mswDecorator);
addDecorator(GlobalWrapper);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

if (typeof global.process === "undefined") {
  const { worker } = require("../src/mocks/browser");
  worker.start();
}
