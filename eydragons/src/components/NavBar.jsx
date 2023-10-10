import * as React from 'react';
// import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const SimpleNavbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          Navbar Simple
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default SimpleNavbar;
