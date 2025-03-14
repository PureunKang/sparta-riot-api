"use client"

import { useEffect, useState } from "react"
import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { CHAMPION_IMAGE_BASE_URL } from "@/constants"
// {
//   "name": "알리스타",
//   "title": "미노타우로스",
//   "image": "Alistar.png"
// },

type SelectedChampion = {
  name: string
  title: string
  image: string
}

const page = () => {
  const [champions, setChampions] = useState<SelectedChampion[]>([])

  useEffect(() => {
    async function fetchSelectedChampions() {
      const res = await fetch("/api/rotation")
      const data = await res.json()
      setChampions(data)
    }
    fetchSelectedChampions()
  }, [])

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

export default page
