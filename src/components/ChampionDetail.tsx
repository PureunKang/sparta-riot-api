import React from "react"
import { fetchChampionDetailList } from "@/utils/serverApi"
import SkillsetCard from "./SkillsetCard"
import { CHAMPION_SPLASH_IMAGE_BASE_URL } from "@/constants"
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
          <div key={cd.id} className="relative w-full min-h-screen">
            <div className="relative w-full h-[600px]">
              <Image
                src={`${CHAMPION_SPLASH_IMAGE_BASE_URL}${cd.id}_0.jpg`}
                alt="제공 이미지가 없습니다."
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50" />

              <div className="absolute bottom-10 inset-x-0">
                <div className="max-w-5xl mx-auto px-4 text-white">
                  <h1 className="text-4xl font-bold mb-2">{cd.name}</h1>
                  <h2 className="text-xl italic mb-4">{cd.title}</h2>
                  <p className="max-w-xl">{cd.lore}</p>
                </div>
              </div>
            </div>

            <div className="max-w-5xl mx-auto px-4 py-8">
              <h3 className="text-2xl font-semibold mb-4">{cd.name}의 스킬</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {cd.spells.map((skill) => (
                  <SkillsetCard key={skill.id} skill={skill} />
                ))}
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default ChampionDetail
