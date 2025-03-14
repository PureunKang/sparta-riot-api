import { useQuery } from "@tanstack/react-query"

type SelectedChampion = {
  name: string
  title: string
  image: string
}

const useChampions = () => {
  return useQuery<SelectedChampion[]>({
    queryKey: ["selectedChampions"],
    queryFn: async () => {
      const res = await fetch("/api/rotation")
      const data: SelectedChampion[] = await res.json()
      return data
    },
  })
}

export default useChampions
