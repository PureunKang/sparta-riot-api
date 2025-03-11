import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { fetchItemList } from "@/utils/serverApi"
// import Image from "next/image"

const ItemCard = async () => {
  const rawData = await fetchItemList()
  const itemList = Object.values(rawData.data)

  return (
    <>
      {itemList.map((i) => {
        return (
          <Card key={i.id}>
            <CardHeader>
              <CardTitle>{i.name}</CardTitle>
              <CardDescription>가격 | {i.gold.total}</CardDescription>
              <CardDescription>팔때 | {i.gold.sell}</CardDescription>
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

export default ItemCard
