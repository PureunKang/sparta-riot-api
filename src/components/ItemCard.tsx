import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import Image from "next/image"
import { ITEM_IMAGE_BASE_URL } from "@/constants"
import { Item } from "@/types/Item"
import parse from "html-react-parser"

const ItemCard = ({ itemList }: { itemList: Item[] }) => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {itemList.map((i) => (
          <Popover key={i.name}>
            <PopoverTrigger asChild>
              <Card className="hover:shadow-lg transition-shadow duration-200 cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-lg text-center">{i.name}</CardTitle>
                  <CardDescription className="text-center text-sm text-muted-foreground">
                    가격 | {i.gold.total}
                  </CardDescription>
                  <CardDescription className="text-center text-sm text-muted-foreground">
                    팔때 | {i.gold.sell}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex justify-center">
                  <Image
                    src={`${ITEM_IMAGE_BASE_URL}${i.image.full}`}
                    alt="제공 이미지가 없습니다."
                    width={50}
                    height={50}
                  />
                </CardContent>
              </Card>
            </PopoverTrigger>
            <PopoverContent className="p-4 max-h-64 overflow-y-auto">
              {parse(i.description)}
            </PopoverContent>
          </Popover>
        ))}
      </div>
    </>
  )
}

export default ItemCard
