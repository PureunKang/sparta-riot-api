import { ChampionSkillset } from "@/types/ChampionDetail"
import React from "react"
import { SPELLS_IMAGE_BASE_URL } from "@/constants"
import Image from "next/image"

const SkillsetCard = ({ skill }: { skill: ChampionSkillset }) => {
  return (
    <div>
      <h3>{skill.name}</h3>
      <Image
        src={`${SPELLS_IMAGE_BASE_URL}${skill.image.full}`}
        alt="제공 이미지가 없습니다."
        width={50}
        height={50}
      />
      <p>{skill.description}</p>
    </div>
  )
}

export default SkillsetCard
