import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { fetchChampionList } from "@/utils/serverApi"
import Link from "next/link"
import Image from "next/image"

const ChampionCard = async () => {
  const championList = await fetchChampionList()
  const imageBaseUrl = "https://ddragon.leagueoflegends.com/cdn/15.5.1/img/champion/"

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
                <Image src={`${imageBaseUrl}${c.image.full}`} alt="제공 이미지가 없습니다." />
              </CardContent>
            </Card>
          </Link>
        )
      })}
    </>
  )
}

export default ChampionCard
