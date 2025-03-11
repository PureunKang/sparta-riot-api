import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { fetchChampionList } from "@/utils/serverApi"
import Image from "next/image"

const ChampionCard = async () => {
  const rawData = await fetchChampionList()
  const championList = Object.values(rawData.data)

  return (
    <>
      {championList.map((c) => {
        return (
          <Card key={c.id}>
            <CardHeader>
              <CardTitle>{c.name}</CardTitle>
              <CardDescription>{c.title}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>이미지 넣을 곳</p>
            </CardContent>
          </Card>
        )
      })}
    </>
  )
}

export default ChampionCard
