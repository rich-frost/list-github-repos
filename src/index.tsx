import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import theme from './theme';

import { ApolloProvider } from '@apollo/client';
import client from './utils/apolloClient';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ApolloProvider client={client}>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <React.StrictMode>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </React.StrictMode>
  </ApolloProvider>
);
