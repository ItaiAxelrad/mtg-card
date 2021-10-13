import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function BasicAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ bgcolor: 'transparent', color: 'inherit' }}
        elevation={0}
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            MUI❤️MTG
          </Typography>
          <Button variant="outlined" color="inherit">
            Save
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
