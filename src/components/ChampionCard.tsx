import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { fetchChampionList } from "@/utils/serverApi"
import Link from "next/link"
import Image from "next/image"
import { CHAMPION_IMAGE_BASE_URL } from "@/constants"

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
                <Image
                  src={`${CHAMPION_IMAGE_BASE_URL}${c.image.full}`}
                  alt="제공 이미지가 없습니다."
                />
              </CardContent>
            </Card>
          </Link>
        )
      })}
    </>
  )
}

export default ChampionCard
