import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '~shared-ui';
import { BrowserRouter } from 'react-router-dom';
import { App } from './app/app';

import '@fontsource/fira-sans/300.css';
import '@fontsource/fira-sans/400.css';
import '@fontsource/fira-sans/500.css';
import '@fontsource/fira-sans/600.css';
import '@fontsource/playfair-display/variable.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </StrictMode>,
);
