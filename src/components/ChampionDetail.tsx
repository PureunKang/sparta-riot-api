import React from "react"
import { fetchChampionDetailList } from "@/utils/serverApi"

type ChampionDetailProps = {
  params: {
    id: string
  }
}

const ChampionDetail = async ({ params }: ChampionDetailProps) => {
  const championDetail = await fetchChampionDetailList(params.id)

  return (
    <>
      {championDetail.map((cd) => {
        return (
          <div key={cd.id}>
            <h1>{cd.name}</h1>
            <h2>{cd.title}</h2>
            <p>이미지</p>
            <div>{cd.lore}</div>
          </div>
        )
      })}
    </>
  )
}

export default ChampionDetail
