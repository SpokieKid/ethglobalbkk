import { Chain } from '@azuro-org/toolkit'

// Polygon Mumbai (testnet) configuration
export const CHAIN_ID = 80001

export const CHAIN: Chain = {
  id: CHAIN_ID,
  rpcUrl: process.env.NEXT_PUBLIC_MUMBAI_RPC_URL || 'https://rpc-mumbai.maticvigil.com',
}

// Azuro testnet contract addresses on Polygon Mumbai
export const AZURO_CONFIG = {
  coreAddress: '0x8198f5d8F8CfFE8f9C413d98a0A55aEB8ab9FbB7',
  lp: '0x23b4ce07ef4e2378319E40CbC0cc95EAbCf8E419',
  betExpress: '0x43A9615eAc7B2701644F30c0cD40633E045FF103',
} 