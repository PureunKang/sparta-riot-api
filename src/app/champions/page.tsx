import React from "react"
import { fetchChampionList } from "@/utils/serverApi"
import { Champion } from "@/types/Champion"

const page = () => {
  fetchChampionList().then((data) => console.log("데이터확인", data))

  return <div>챔피언 목록</div>
}

export default page
