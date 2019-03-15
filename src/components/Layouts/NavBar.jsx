import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import MenuIcon from '@material-ui/icons/Menu';

const NavBar = (props) => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
<<<<<<< HEAD
          <Typography variant="h3" color="inherit">
=======
          <Typography variant="h6" color="inherit">
>>>>>>> a63a38df163873ff27ca6b2d3f981b8283538e28
            Electronic Election Collation App 
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
  }

export default NavBar;
