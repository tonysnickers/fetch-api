import { Container, Grid } from '@mui/material'
import React, { useContext } from 'react'
import { CardMovie } from '../components/Card'
import { ApiContext } from '../fetchApi/FectchApi'

const Home = () => {
  const movies = useContext(ApiContext)
  console.log(movies)
  return (
    <Container sx={{ marginTop: '60px' }}>
      <Grid container spacing={2}>
        {movies?.map((movie) => (
          <Grid item xs={4} key={movie.id}>
            <CardMovie movie={movie} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Home
