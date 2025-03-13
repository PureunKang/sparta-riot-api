import { ChampionSkillset } from "@/types/ChampionDetail"
import React from "react"

const SkillsetCard = ({ skill }: { skill: ChampionSkillset }) => {
  return (
    <div>
      <h3>{skill.name}</h3>
      <p>이미지</p>
      <p>{skill.description}</p>
    </div>
  )
}

export default SkillsetCard
