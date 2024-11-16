import { useEffect, useState } from 'react'
import { useGames, useChain } from '@azuro-org/sdk'

interface Game {
  id: string
  gameId: string
  sport: {
    name: string
  }
  league: {
    name: string
  }
  participants: {
    name: string
  }[]
  startsAt: string
  status: string
}

export default function GamesList() {
  const [error, setError] = useState<string | null>(null)
  const { appChain } = useChain()
  
  const { games, loading: isLoading } = useGames({
    filter: {
      limit: 10,
      // 根据文档，移除了不支持的 sportIds 和 status 参数
    }
  })

  useEffect(() => {
    if (games?.length === 0 && !isLoading) {
      setError('No games available on testnet. Please check back later.')
    }
  }, [games, isLoading])

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-4">
        <div className="text-red-500 mb-2">{error}</div>
        <div className="text-sm text-gray-500">
          Network: {appChain.name} (Chain ID: {appChain.id})
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="text-sm text-gray-500 mb-4">
        Network: {appChain.name}
      </div>
      {games?.map((game: Game) => (
        <div 
          key={game.id} 
          className="p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="text-sm text-gray-500">{game.sport.name} - {game.league.name}</div>
          <div className="mt-2 font-medium">
            {game.participants[0]?.name} vs {game.participants[1]?.name}
          </div>
          <div className="text-sm text-gray-500 mt-1">
            {new Date(parseInt(game.startsAt) * 1000).toLocaleString()}
          </div>
          <div className="text-sm text-blue-500 mt-1">
            Status: {game.status}
          </div>
        </div>
      ))}
    </div>
  )
}