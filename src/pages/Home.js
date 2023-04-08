import {Container, Grid } from '@mui/material'
import React, { useContext } from 'react'
import { CardMovie } from '../components/Card'
import { MovieContext } from '../App'

const Home = () => {
  const data = useContext(MovieContext)
  return (
    <>
      <Container sx={{ marginTop: '60px' }}>
        <Grid container spacing={2}>
          {data?.map((movie) => (
            <Grid item xs={4} key={movie.id}>
              <CardMovie movie={movie} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  )
}

export default Home
