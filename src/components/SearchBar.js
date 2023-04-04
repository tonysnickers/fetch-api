import { TextField } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const SearchBar = ({ setQuery }) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <TextField
        id="outlined-basic"
        variant="outlined"
        sx={{ width: 500, textAlign: 'center', border: '1px solid #fff' }}
        onChange={(e) => setQuery(e.target.value)}
      />
    </Box>
  )
}

export default SearchBar
