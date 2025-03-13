import { NextResponse } from "next/server"

export async function GET(request: Request) {
  const apiKey = process.env.RIOT_API_KEY

  const rotationsRes = await fetch(
    `https://br1.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=${apiKey}`,
    {},
  )
  const rotationData = await rotationRes.json()

  return NextResponse.json(data)
}
