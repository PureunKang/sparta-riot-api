import Image from "next/image"
import React from "react"
import logo from "../public/logo.png"

const LoadingSkeleton = () => {
  return (
    <>
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <Image src={logo} alt="로고이미지를 불러올 수 없습니다." width={1100} height={200} />
      </div>
    </>
  )
}

export default LoadingSkeleton
