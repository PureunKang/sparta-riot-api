import React from "react"
import ChampionCard from "@/components/ChampionCard"
import { fetchChampionList } from "@/utils/serverApi"

const ChampionPage = async () => {
  const championList = await fetchChampionList()

  return (
    <>
      <ChampionCard championList={championList} />
    </>
  )
}

export default ChampionPage
