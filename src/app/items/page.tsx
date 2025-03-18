import ItemCard from "@/components/ItemCard"
import { fetchItemList } from "@/utils/serverApi"
import React from "react"

const ItemPage = async () => {
  const itemList = await fetchItemList()

  return (
    <>
      <div className="container mx-auto p-6">
        <div className="text-center mb-8">
          <p className="text-gray-700">각 아이템을 클릭하여 부가 정보를 확인해 보세요!</p>
        </div>
        <ItemCard itemList={itemList} />
      </div>
    </>
  )
}

export default ItemPage
