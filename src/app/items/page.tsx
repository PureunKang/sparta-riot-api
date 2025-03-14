import ItemCard from "@/components/ItemCard"
import { fetchItemList } from "@/utils/serverApi"
import React from "react"

const ItemPage = async () => {
  const itemList = await fetchItemList()

  return (
    <>
      <ItemCard itemList={itemList} />
    </>
  )
}

export default ItemPage
