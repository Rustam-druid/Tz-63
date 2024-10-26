import React from 'react';
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

const ToolBar = () => {
  return (
    <Box sx={{ flexGrow: 1, mb:5 }}>
      <AppBar position="static">
        <Toolbar  sx={{backgroundColor:'white' ,color:'black'}}>
          <Typography   color='inherit' variant="h6" component={NavLink} to='/' sx={{ flexGrow: 1 }}>
My Blog
          </Typography>
          <Button color='inherit' to='/' component={NavLink}>Home</Button>
          <Button color='inherit' to='/quote/newquote'  component={NavLink}>Add</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default ToolBar;