export type ChampionDetail = {
  id: string
  key: string
  name: string
  title: string
  image: {
    full: string
    sprite: string
  }
  lore: string
  spells: [
    {
      id: string
      name: string
      description: string
    },
    image: {
      full: string
      sprite: string
    },
  ]
}
