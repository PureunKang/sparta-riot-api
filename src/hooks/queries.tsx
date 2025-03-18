import { SelectedChampion } from "@/types/Champion"
import { useQuery } from "@tanstack/react-query"

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
