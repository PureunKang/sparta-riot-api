"use client"

import { useEffect, useState } from "react"
import React from "react"

// {
//   "name": "알리스타",
//   "title": "미노타우로스",
//   "image": "Alistar.png"
// },

type SelectedChampion = {
  name: string
  title: string
  image: string
}

const page = () => {
  const [champions, setChampions] = useState<SelectedChampion[]>([])

  useEffect(() => {
    async function fetchSelectedChampions() {
      const res = await fetch("/api/rotation")
      const data = await res.json()
      setChampions(data)
    }
    fetchSelectedChampions()
  }, [])

  return (
    <>
      {champions.map((c) => {
        return (
          <>
            <div>{c.name}</div>
            <div>{c.title}</div>
            <p>이미지 넣을 곳</p>
          </>
        )
      })}
    </>
  )
}

export default page
