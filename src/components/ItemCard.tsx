import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { fetchItemList } from "@/utils/serverApi"
import Image from "next/image"
import { ITEM_IMAGE_BASE_URL } from "@/constants"

const ItemCard = async () => {
  const itemList = await fetchItemList()

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
              <Image
                src={`${ITEM_IMAGE_BASE_URL}${i.image.full}`}
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

export default ItemCard
