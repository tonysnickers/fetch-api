import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

export const ApiContext = createContext()

// export const useData = () => {
//   return useContext(ApiContext)
// }
export const ApiProvider = ({ children }) => {
  const [data, setData] = useState([])

  useEffect(() => {
    axios
      .get(
        'https://api.themoviedb.org/3/movie/popular?api_key=7a6a1bf84273ea2287a836a3821ac0a7&language=en-US&page=1',
      )
      .then((res) => setData(res.data?.results))
  }, [])

  return <ApiContext.Provider value={data}>{children}</ApiContext.Provider>
}

export default ApiProvider
