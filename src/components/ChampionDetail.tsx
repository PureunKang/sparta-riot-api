import React from "react"
import { fetchChampionDetailList } from "@/utils/serverApi"

type ChampionDetailProps = {
  params: {
    id: string
  }
}

const ChampionDetail = async ({ params }: ChampionDetailProps) => {
  const championDetail = await fetchChampionDetailList(params.id)
  console.log("데이터확인", championDetail)

  return (
    <>
      {/* {championDetail.map((cd) => {
        return (
          <div key={cd.id}>
            <h1>{cd.name}</h1>
          </div>
        )
      })} */}
    </>
  )
}

export default ChampionDetail
