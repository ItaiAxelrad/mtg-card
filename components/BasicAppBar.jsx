import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function BasicAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position='static'
        sx={{ bgcolor: 'transparent', color: 'inherit' }}
        elevation={0}
      >
        <Toolbar>
          <Typography variant='h5' component='div' sx={{ flexGrow: 1 }}>
            MUI
            <FavoriteIcon fontSize='small' color='primary' />
            MTG
          </Typography>
          <Button variant='outlined' color='inherit' disabled>
            Save
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
