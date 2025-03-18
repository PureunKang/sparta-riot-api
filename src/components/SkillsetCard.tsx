import React from "react"
import Image from "next/image"
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"
import { ChampionSkillset } from "@/types/ChampionDetail"
import { SPELLS_IMAGE_BASE_URL } from "@/constants"

const SkillsetCard = ({ skill }: { skill: ChampionSkillset }) => {
  return (
    <Card className="p-4 text-center">
      <CardHeader>
        <CardTitle>{skill.name}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center">
        <Image
          src={`${SPELLS_IMAGE_BASE_URL}${skill.image.full}`}
          alt={skill.name}
          width={50}
          height={50}
        />
        <CardDescription className="mt-2 text-sm text-center">{skill.description}</CardDescription>
      </CardContent>
    </Card>
  )
}

export default SkillsetCard
