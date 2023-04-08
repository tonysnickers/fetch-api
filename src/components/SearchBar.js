import { TextField } from '@mui/material'
import { Box } from '@mui/system'
import React, { useContext } from 'react'
import { InputContext } from '../App'

const SearchBar = () => {
  const query = useContext(InputContext)
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <TextField
        id="outlined-basic"
        variant="outlined"
        sx={{ width: 500, textAlign: 'center', border: '1px solid #fff' }}
        onChange={(e) => query.setInputValue(e.target.value)}
      />
    </Box>
  )
}

export default SearchBar
