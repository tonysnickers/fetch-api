import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export const useGetMovie = (query) => {
  const { data } = useQuery(['query', query], async () => {
    const apiKey = '7a6a1bf84273ea2287a836a3821ac0a7'
    return query
      ? await axios.get(
          `https://api.themoviedb.org/3/search/multi?api_key=e601f7811cab9a1cab3eb8660bbfc24d&language=en-US&query=${query}&page=1&include_adult=false`,
        )
      : await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`,
        )
  })
  return {
    data: data?.data.results || [],
  }
}
