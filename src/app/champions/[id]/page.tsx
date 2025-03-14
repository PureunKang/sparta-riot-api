import React from "react"
import ChampionDetail from "@/components/ChampionDetail"

type PageProps = {
  params: {
    id: string
  }
}

const ChampionDetailPage = ({ params }: PageProps) => {
  return (
    <>
      <ChampionDetail params={params} />
    </>
  )
}

export default ChampionDetailPage
