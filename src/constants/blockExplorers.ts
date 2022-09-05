import { ChainName } from './chains'

export type BlockExplorerName = 'etherscan'
export type BlockExplorer = { name: string; url: string }

type EtherscanChains  = Extract<
  ChainName,
  | 'bsc'
  | 'bscTestnet'
  | 'avalanche'
  | 'avalancheFuji'
  | 'fantom'
  | 'fantomTestnet'
>
export const etherscanBlockExplorers: Record<EtherscanChains , BlockExplorer> = {
  bsc: {
    name: 'Etherscan',
    url: 'https://bscscan.com/',
  },
  bscTestnet: {
    name: 'Etherscan',
    url: 'https://testnet.bscscan.com/',
  },
  avalanche: {
    name: 'Etherscan',
    url: 'https://snowtrace.io/',
  },
  avalancheFuji: {
    name: 'Etherscan',
    url: 'https://testnet.snowtrace.io/',
  },
  fantom: {
    name: 'Etherscan',
    url: 'https://ftmscan.com/',
  },
  fantomTestnet: {
    name: 'Etherscan',
    url: 'https://testnet.ftmscan.com/',
  }
} as const