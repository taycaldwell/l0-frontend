import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { ColorModeScript, ChakraProvider } from '@chakra-ui/react';

import WalletConfig from './WalletConfig'
import App from './App';
import theme from './theme'

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

root.render(
  <React.StrictMode>
    <ChakraProvider>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <WalletConfig>
      <App />
    </WalletConfig>
    </ChakraProvider>
  </React.StrictMode>
);
