export type Champion = {
  data: Array<string | number>
  version: string
  id: string
  key: string
  name: string
  title: string
  blurb: string
  info: {
    attack: number
    defense: number
    magic: number
    difficulty: number
  }
  image: {
    full: string
    sprite: string
    group: string
    x: number
    y: number
    w: number
    h: number
  }
  tags: Array<string>
  partype: string
  stats: {
    hp: number
    hpperlevel: number
    mp: number
    mpperlevel: number
    movespeed: number
    armor: number
    armorperlevel: number
    spellblock: number
    spellblockperlevel: number
    mpregen: number
    mpregenperlevel: number
    crit: number
    critperlevel: number
    attackdamage: number
    attackdamageperlevel: number
    attackspeedperlevel: number
    attackspeed: number
  }
}

export type SelectedChampion = Pick<Champion, "key" | "id" | "name" | "title"> & {
  image: string
}
