import type { Metadata } from "next"
import "./globals.css"
import Link from "next/link"
import Provider from "./provider"

export const metadata: Metadata = {
  title: "리그 오브 레전드 정보 앱",
  description: "Riot Games API를 활용해 챔피언의 다양한 정보를 제공합니다.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <div className="absolute top-0 left-0 right-0 z-20">
          <div className="container mx-auto flex items-center justify-between py-4 px-6">
            <div className="text-2xl font-bold">
              <Link href="/">League of Legends</Link>
            </div>
            <nav>
              <ul className="flex space-x-6">
                <li>
                  <Link href="/champions" className="hover:underline">
                    챔피언 목록
                  </Link>
                </li>
                <li>
                  <Link href="/items" className="hover:underline">
                    아이템 목록
                  </Link>
                </li>
                <li>
                  <Link href="/rotation" className="hover:underline">
                    챔피언 로테이션
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="min-h-screen">
            <Provider>{children}</Provider>
          </div>
        </div>
      </body>
    </html>
  )
}
