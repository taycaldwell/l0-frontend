import React  from 'react';

import { useColorMode } from '@chakra-ui/react'
import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultWallets, darkTheme, lightTheme, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import {
  bsc,
  avalanche,
  fantom,
  bscTestnet,
  avalancheFuji,
  fantomTestnet
} from './constants/chains';

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
      ? [
        chain.goerli,
        bscTestnet,
        chain.polygonMumbai,
        avalancheFuji,
        chain.arbitrumRinkeby,
        chain.optimismGoerli,
        fantomTestnet
      ]
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

const WalletConfig = ({ children }) => {

  const { colorMode } = useColorMode();

  // Branding guidelines: #00ffff #7f3af8 #6633ff #ff0066
  const darkMode = darkTheme({
    accentColor: '#6633ff',
    accentColorForeground: 'white',
    // borderRadius: 'small',
    // fontStack: 'system',
    // overlayBlur: 'small',
  });

  const lightMode = lightTheme({
    accentColor: '#00ffff',
    accentColorForeground: 'black',
  });

  const theme = colorMode === 'light' ? lightMode : darkMode;

  return (
    <WagmiConfig client={wagmiClient}>
    <RainbowKitProvider chains={chains} modalSize="compact" theme={theme}>
      { children }
    </RainbowKitProvider>
  </WagmiConfig>
  );
}

export default WalletConfig;