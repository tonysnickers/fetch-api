import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Details from './pages/Details'
import Navbar from './components/NavBar'
import { createContext, useState } from 'react'
import { useGetMovie } from './fetchApi/FectchApi'

export const MovieContext = createContext()
export const InputContext = createContext()

function App() {
  const [inputValue, setInputValue] = useState('')
  const { data } = useGetMovie(inputValue)

  return (
    <BrowserRouter>
      <InputContext.Provider value={{ setInputValue }}>
        <Navbar />
      </InputContext.Provider>
      <Routes>
        <Route
          path="/"
          element={
            <MovieContext.Provider value={data}>
              <Home />
            </MovieContext.Provider>
          }
        />
        <Route path="/details" element={<Details />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
