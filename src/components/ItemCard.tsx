import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { fetchItemList } from "@/utils/serverApi"
import Image from "next/image"

const ItemCard = async () => {
  const itemList = await fetchItemList()
  const itemImageBaseUrl = "https://ddragon.leagueoflegends.com/cdn/15.5.1/img/item/"

  return (
    <>
      {itemList.map((i) => {
        return (
          <Card key={i.name}>
            <CardHeader>
              <CardTitle>{i.name}</CardTitle>
              <CardDescription>가격 | {i.gold.total}</CardDescription>
              <CardDescription>팔때 | {i.gold.sell}</CardDescription>
            </CardHeader>
            <CardContent>
              <Image src={`${itemImageBaseUrl}${i.image.full}`} alt="제공 이미지가 없습니다." />
            </CardContent>
          </Card>
        )
      })}
    </>
  )
}

export default ItemCard
