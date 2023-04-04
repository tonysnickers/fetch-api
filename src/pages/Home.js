import {Container, Grid } from '@mui/material'
import React from 'react'
import { CardMovie } from '../components/Card'

const Home = () => {

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
