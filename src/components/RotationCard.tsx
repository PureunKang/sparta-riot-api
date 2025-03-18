import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { CHAMPION_IMAGE_BASE_URL } from "@/constants"
import { SelectedChampion } from "@/types/Champion"
import Link from "next/link"

const RotationCard = ({ champions }: { champions: SelectedChampion[] }) => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {champions.map((c) => (
          <Link key={c.id} href={`/champions/${c.id}`}>
            <Card className="hover:shadow-lg transition-shadow duration-200">
              <CardHeader>
                <CardTitle className="text-lg text-center">{c.name}</CardTitle>
                <CardDescription className="text-center text-sm text-muted-foreground">
                  {c.title}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center">
                <Image
                  src={`${CHAMPION_IMAGE_BASE_URL}${c.image}`}
                  alt={`${c.name} 이미지`}
                  width={100}
                  height={100}
                  className="rounded-md"
                />
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </>
  )
}

export default RotationCard
