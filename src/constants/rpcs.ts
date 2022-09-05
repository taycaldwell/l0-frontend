import { ChainName } from './chains'

export type RpcProviderName = 'public'

type PublicChains = Extract<
  ChainName,
  | 'bsc'
  | 'bscTestnet'
  | 'avalanche'
  | 'avalancheFuji'
  | 'fantom'
  | 'fantomTestnet'
>
export const publicRpcUrls: Record<PublicChains, string> = {
  bsc: 'https://bsc-dataseed.binance.org',
  bscTestnet: 'https://data-seed-prebsc-1-s1.binance.org:8545',
  avalanche: 'https://api.avax.network/ext/bc/C/rpc',
  avalancheFuji: 'https://api.avax-test.network/ext/bc/C/rpc',
  fantom: 'https://rpc.fantom.network',
  fantomTestnet: 'https://rpc.testnet.fantom.network'
} as const