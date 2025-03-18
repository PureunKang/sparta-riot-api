"use client"

import React from "react"
import useChampions from "@/hooks/queries"
import RotationCard from "@/components/RotationCard"

const RotationPage = () => {
  const { data: champions, isPending, isError } = useChampions()

  if (isPending) return <div>로딩중</div>
  if (isError) return <div>불러오기 실패</div>
  if (!champions) return <div>데이터가 없습니다.</div>

  return (
    <>
      <div className="container mx-auto p-6">
        <div className="text-center mb-8">
          <p className="text-gray-700">이번 주 무료 챔피언</p>
        </div>
        <RotationCard champions={champions} />
      </div>
    </>
  )
}

export default RotationPage
