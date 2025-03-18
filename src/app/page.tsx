import Link from "next/link"
import Image from "next/image"
import { HOME_IMAGE_BASE_URL } from "@/constants"

export default function Home() {
  return (
    <div className="bg-white text-black min-h-screen">
      <div className="max-w-5xl mx-auto py-12 px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">리그 오브 레전드 정보 앱</h1>
          <p className="text-gray-700">
            Riot Games API를 활용해 챔피언의 다양한 정보를 제공합니다.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/champions">
            <div className="relative group cursor-pointer overflow-hidden rounded-md shadow hover:scale-[1.02] transition-transform">
              <Image
                src={`${HOME_IMAGE_BASE_URL}Aatrox_0.jpg`}
                alt="챔피언 목록"
                width={400}
                height={500}
                className="object-cover w-full h-auto"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-90 text-white text-center py-2">
                챔피언 목록
              </div>
            </div>
          </Link>
          <Link href="/items">
            <div className="relative group cursor-pointer overflow-hidden rounded-md shadow hover:scale-[1.02] transition-transform">
              <Image
                src={`${HOME_IMAGE_BASE_URL}Teemo_0.jpg`}
                alt="아이템 목록"
                width={400}
                height={500}
                className="object-cover w-full h-auto"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-90 text-white text-center py-2">
                아이템 목록
              </div>
            </div>
          </Link>
          <Link href="/rotation">
            <div className="relative group cursor-pointer overflow-hidden rounded-md shadow hover:scale-[1.02] transition-transform">
              <Image
                src={`${HOME_IMAGE_BASE_URL}Galio_0.jpg`}
                alt="로테이션"
                width={400}
                height={500}
                className="object-cover w-full h-auto"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-90 text-white text-center py-2">
                챔피언 로테이션
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
