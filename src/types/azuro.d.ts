declare module '@azuro-org/toolkit' {
  export interface Chain {
    id: number
    rpcUrl: string
  }

  export function createCore(config: {
    chain: Chain
    coreAddress: string
    lpAddress: string
    betExpressAddress: string
  }): any

  export interface Game {
    id: string
    sportName: string
    leagueName: string
    participants: {
      name: string
    }[]
    startsAt: number
    status: string
  }
} 