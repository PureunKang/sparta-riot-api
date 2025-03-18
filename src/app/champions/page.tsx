import React from "react"
import ChampionCard from "@/components/ChampionCard"
import { fetchChampionList } from "@/utils/serverApi"

const ChampionPage = async () => {
  const championList = await fetchChampionList()

  return (
    <>
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">챔피언 목록</h1>
        <ChampionCard championList={championList} />
      </div>
    </>
  )
}

export default ChampionPage
