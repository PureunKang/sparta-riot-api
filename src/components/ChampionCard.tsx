import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { fetchChampionList } from "@/utils/serverApi"
import Link from "next/link"
// import Image from "next/image"

const ChampionCard = async () => {
  const championList = await fetchChampionList()

  return (
    <>
      {championList.map((c) => {
        return (
          <Link key={c.id} href={`/champions/${c.id}`}>
            <Card>
              <CardHeader>
                <CardTitle>{c.name}</CardTitle>
                <CardDescription>{c.title}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>이미지 넣을 곳</p>
              </CardContent>
            </Card>
          </Link>
        )
      })}
    </>
  )
}

export default ChampionCard
