import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const CustomAppBar = () => (
  <AppBar position="static" className="AppBar">
    <Toolbar>
      <Typography variant="h4" component="div">
        Weather App
      </Typography>
    </Toolbar>
  </AppBar>
);

export default CustomAppBar;
