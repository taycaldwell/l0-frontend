import { etherscanBlockExplorers  } from './blockExplorers'
import { publicRpcUrls } from './rpcs'

export const chainId = {
  bsc: 56,
  bscTestnet: 97,
  avalanche: 43_114,
  avalancheFuji: 43_113,
  fantom: 250,
  fantomTestnet: 4_002
};

export const bsc = {
  id: chainId.bsc,
  name: 'BNB Smart Chain',
  network: 'bsc',
  nativeCurrency: { name: 'BNB', symbol: 'BNB', decimals: 18 },
  rpcUrls: {
    default: publicRpcUrls.bsc,
    public: publicRpcUrls.bsc,
  },
  blockExplorers: {
    etherscan: etherscanBlockExplorers.bsc,
    default: etherscanBlockExplorers.bsc,
  },
  testnet: false,
  iconUrl: 'https://github.com/taycaldwell/assets/raw/master/icons/bsc.png'
};

export const bscTestnet = {
  id: chainId.bscTestnet,
  name: 'BNB Smart Chain Testnet',
  network: 'bsc-testnet',
  nativeCurrency: { name: 'BNB', symbol: 'BNB', decimals: 18 },
  rpcUrls: {
    default: publicRpcUrls.bscTestnet,
    public: publicRpcUrls.bscTestnet,
  },
  blockExplorers: {
    etherscan: etherscanBlockExplorers.bscTestnet,
    default: etherscanBlockExplorers.bscTestnet,
  },
  testnet: true,
  iconUrl: 'https://github.com/taycaldwell/assets/raw/master/icons/bscTestnet.png'
};

export const avalanche = {
  id: chainId.avalanche,
  name: 'Avalanche',
  network: 'avalanche',
  nativeCurrency: { name: 'AVAX', symbol: 'AVAX', decimals: 18 },
  rpcUrls: {
    default: publicRpcUrls.avalanche,
    public: publicRpcUrls.avalanche,
  },
  blockExplorers: {
    etherscan: etherscanBlockExplorers.avalanche,
    default: etherscanBlockExplorers.avalanche,
  },
  testnet: false,
};

export const avalancheFuji = {
  id: chainId.avalancheFuji,
  name: 'Avalanche Fuji',
  network: 'avalanche-fuji',
  nativeCurrency: { name: 'AVAX', symbol: 'AVAX', decimals: 18 },
  rpcUrls: {
    default: publicRpcUrls.avalancheFuji,
    public: publicRpcUrls.avalancheFuji,
  },
  blockExplorers: {
    etherscan: etherscanBlockExplorers.avalancheFuji,
    default: etherscanBlockExplorers.avalancheFuji,
  },
  testnet: true,
};

export const fantom = {
  id: chainId.fantom,
  name: 'Fantom',
  network: 'fantom',
  nativeCurrency: { name: 'FTM', symbol: 'FTM', decimals: 18 },
  rpcUrls: {
    default: publicRpcUrls.fantom,
    public: publicRpcUrls.fantom,
  },
  blockExplorers: {
    etherscan: etherscanBlockExplorers.fantom,
    default: etherscanBlockExplorers.fantom,
  },
  testnet: false,
  iconUrl: 'https://github.com/taycaldwell/assets/raw/master/icons/fantom.png'
};

export const fantomTestnet = {
  id: chainId.fantomTestnet,
  name: 'Fantom Testnet',
  network: 'fantom-testnet',
  nativeCurrency: { name: 'FTM', symbol: 'FTM', decimals: 18 },
  rpcUrls: {
    default: publicRpcUrls.fantomTestnet,
    public: publicRpcUrls.fantomTestnet,
  },
  blockExplorers: {
    etherscan: etherscanBlockExplorers.fantomTestnet,
    default: etherscanBlockExplorers.fantomTestnet,
  },
  testnet: true,
  iconUrl: 'https://github.com/taycaldwell/assets/raw/master/icons/fantomTestnet.png'
};