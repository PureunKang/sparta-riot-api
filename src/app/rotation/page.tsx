"use client"

import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { CHAMPION_IMAGE_BASE_URL } from "@/constants"
import useChampions from "@/hooks/queries"

const RotationPage = () => {
  const { data: champions, isPending, isError } = useChampions()

  if (isPending) return <div>로딩중</div>
  if (isError) return <div>불러오기 실패</div>

  return (
    <>
      {champions.map((c) => {
        return (
          <Card key={c.name}>
            <CardHeader>
              <CardTitle>{c.name}</CardTitle>
              <CardDescription>{c.title}</CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                src={`${CHAMPION_IMAGE_BASE_URL}${c.image}`}
                alt="제공 이미지가 없습니다."
                width={50}
                height={50}
              />
            </CardContent>
          </Card>
        )
      })}
    </>
  )
}

export default RotationPage
