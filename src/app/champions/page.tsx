import React from "react"
import ChampionCard from "@/components/ChampionCard"
import { fetchChampionList } from "@/utils/serverApi"

const ChampionPage = async () => {
  const championList = await fetchChampionList()

  return (
    <>
      <div className="container mx-auto p-6">
        <div className="text-center mb-8">
          <p className="text-gray-700">
            140여 명의 챔피언 중 자신의 플레이 스타일에 어울리는 챔피언을 찾아보세요!
          </p>
        </div>
        <ChampionCard championList={championList} />
      </div>
    </>
  )
}

export default ChampionPage
