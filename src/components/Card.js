import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Button, CardActionArea, CardActions } from '@mui/material'

export const CardMovie = ({ movie }) => {
  const image = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
  return (

    <Card sx={{ maxWidth: 345, display: 'grid', gridTemplateColumns: '3fr' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" className='movie_name'>
            {movie.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" className='movie_overview'>
            {movie.overview}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  )
}
