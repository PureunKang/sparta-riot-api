import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { CHAMPION_IMAGE_BASE_URL } from "@/constants"
import { Champion } from "@/types/Champion"

const ChampionCard = ({ championList }: { championList: Champion[] }) => {
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
                  width={50}
                  height={50}
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
