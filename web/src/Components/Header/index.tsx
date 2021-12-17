import React from 'react';
import {
  AppBar, Link, Toolbar, Typography,
} from '@mui/material';
import { DocumentScanner } from '@mui/icons-material';

const Header = () => (
  <AppBar position="relative" style={{ backgroundColor: '#81accc' }}>
    <Toolbar>
      <DocumentScanner sx={{ mr: 2 }} />
      <Typography variant="h6" color="inherit" noWrap>
        <Link href="/">Home</Link>
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Header;
