import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';


const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static " color={'success'}>
    <Toolbar variant="dense">
      <Typography variant="h6" color="inherit" component="div">
        Dp movies
      </Typography>
    </Toolbar>
  </AppBar>
  </Box>
  )
}

export default Navbar