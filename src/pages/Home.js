import { Card, Container, Grid, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { CardMovie } from '../components/Card'
import { useGetMovie } from '../fetchApi/FectchApi'

const Home = () => {
  const [query, setQuery] = useState('')
  const { data } = useGetMovie(query)
  console.log(data)

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <TextField
          id="outlined-basic"
          variant="outlined"
          sx={{ width: 500, textAlign: 'center' }}
          onChange={(e) => setQuery(e.target.value)}
        />
      </Box>

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
