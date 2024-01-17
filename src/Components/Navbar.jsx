import React from 'react'
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
import Logo from './Images/icons8-imdb-48.png'


const Navbar = () => {
  
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={Logo} alt="IMDb Logo" />
        </div>
        <div className="navbar-links">
          <ul>
            <li><a href="#">Movies</a></li>
            <li><a href="#">TV Shows</a></li>
            <li><a href="#">Celebs</a></li>
            <li><a href="#">More</a></li>
          </ul>
        </div>
        <div className="navbar-search">
          <input type="text" placeholder="Search IMDb" />
          <button type="button">Search</button>
        </div>
      </div>
    </nav>
  );
};


  //   <Box sx={{ flexGrow: 1 }}>
  //   <AppBar position="static " color={'success'}>
  //   <Toolbar variant="dense">
  //     <Typography variant="h6" color="inherit" component="div">
  //       Dp movies
  //     </Typography>
  //   </Toolbar>
  // </AppBar>
  // </Box>
//   )
// }

export default Navbar