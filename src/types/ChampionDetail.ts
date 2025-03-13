export type ChampionDetail = {
  data: Array<string>
  id: string
  key: string
  name: string
  title: string
  image: {
    full: string
    sprite: string
  }
  lore: string
  spells: ChampionSkillset[]
}

export type ChampionSkillset = {
  id: string
  name: string
  description: string
  image: {
    full: string
    sprite: string
  }
}
