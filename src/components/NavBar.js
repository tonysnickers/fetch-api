import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'

const NavBar = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{ mr: 2, display: { sm: 'none' } }}
          ></IconButton>

          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            MUI
          </Typography>
          <SearchBar />
          <Box>
            <Link
              to={'/'}
              style={{
                textDecoration: 'none',
                color: '#fff',
                marginRight: '10px',
              }}
            >
              home
            </Link>
            <Link
              to={'/details'}
              style={{ textDecoration: 'none', color: '#fff' }}
            >
              Contact
            </Link>
          </Box>
        </Toolbar>
      </AppBar>

      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  )
}

export default NavBar
