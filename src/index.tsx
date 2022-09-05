import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultWallets, darkTheme, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import App from './App';
import {bsc, avalanche, fantom, bscTestnet, avalancheFuji, fantomTestnet} from './constants/chains';

const { chains, provider, webSocketProvider } = configureChains(
  [
    chain.mainnet,
    bsc,
    chain.polygon,
    avalanche,
    chain.arbitrum,
    chain.optimism,
    fantom,
    ...(process.env.REACT_APP_ENABLE_TESTNETS === 'true'
      ? [chain.goerli, bscTestnet, chain.polygonMumbai, avalancheFuji, chain.arbitrumRinkeby, chain.optimismGoerli, fantomTestnet]
      : []),
  ],
  [
    alchemyProvider({ apiKey: '_gg7wSSi0KMBsdKnGVfHDueq6xMB9EkC' }),
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'My App',
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains} modalSize="compact" theme={darkTheme({
        // Branding guidelines: #00ffff #7f3af8 #6633ff #ff0066
        accentColor: '#6633ff',
        accentColorForeground: 'white',
        // borderRadius: 'small',
        // fontStack: 'system',
        // overlayBlur: 'small',
      })}>
        <App />
      </RainbowKitProvider>
    </WagmiConfig>
  </React.StrictMode>
);
