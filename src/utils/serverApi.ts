// 추후 Server Action으로 변경 위한 선언
"use server"

import { Champion } from "@/types/Champion"
import { Item } from "@/types/Item"

export const fetchChampionList = async (): Promise<Champion> => {
  const res = await fetch(
    "https://ddragon.leagueoflegends.com/cdn/15.5.1/data/ko_KR/champion.json",
    {
      next: {
        revalidate: 86400,
      },
    },
  )
  const data = await res.json()
  return data
}

export const fetchChampionDetailList = async (): Promise<Champion> => {
  const res = await fetch(
    "https://ddragon.leagueoflegends.com/cdn/15.5.1/data/ko_KR/champion.json",
    {
      cache: "no-store",
    },
  )
  const data = await res.json()
  return data
}

export const fetchItemList = async (): Promise<Item> => {
  const res = await fetch("https://ddragon.leagueoflegends.com/cdn/15.5.1/data/ko_KR/item.json", {
    cache: "force-cache",
  })
  const data = await res.json()
  return data
}
