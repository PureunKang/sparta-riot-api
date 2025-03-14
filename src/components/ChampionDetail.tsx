import React from "react"
import { fetchChampionDetailList } from "@/utils/serverApi"
import SkillsetCard from "./SkillsetCard"
import { CHAMPION_IMAGE_BASE_URL } from "@/constants"
import Image from "next/image"

type ChampionDetailProps = {
  params: {
    id: string
  }
}

const ChampionDetail = async ({ params }: ChampionDetailProps) => {
  const championDetail = await fetchChampionDetailList(params.id)

  return (
    <>
      {championDetail.map((cd) => {
        return (
          <div key={cd.id}>
            <h1>{cd.name}</h1>
            <h2>{cd.title}</h2>
            <Image
              src={`${CHAMPION_IMAGE_BASE_URL}${cd.image.full}`}
              alt="제공 이미지가 없습니다."
              width={50}
              height={50}
            />
            <div>{cd.lore}</div>
            <h3>{cd.name}의 스킬</h3>
            <div>
              {cd.spells.map((skill) => (
                <SkillsetCard key={skill.id} skill={skill} />
              ))}
            </div>
          </div>
        )
      })}
    </>
  )
}

export default ChampionDetail
