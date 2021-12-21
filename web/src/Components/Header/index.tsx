import React from 'react';
import {
  AppBar, Link, Toolbar, Typography,
} from '@mui/material';
import { DocumentScanner } from '@mui/icons-material';

const Header = () => (
  <AppBar position="relative" style={{ backgroundColor: '#1565c0' }}>
    <Toolbar>
      <Link href="/" underline="none" color="white">
        <DocumentScanner sx={{ mr: 2 }} />
      </Link>
      <Link href="/" underline="none" color="white">
        <Typography variant="h6" color="inherit" noWrap>
          Home
        </Typography>
      </Link>
    </Toolbar>
  </AppBar>
);

export default Header;
