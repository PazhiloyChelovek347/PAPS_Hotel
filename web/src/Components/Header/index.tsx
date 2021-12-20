import React from 'react';
import {
  AppBar, Link, Toolbar, Typography,
} from '@mui/material';
import { DocumentScanner } from '@mui/icons-material';

const Header = () => (
  <AppBar position="relative" style={{ backgroundColor: '#1565c0' }}>
    <Link href="/" underline="none" color="white">
      <Toolbar>
        <DocumentScanner sx={{ mr: 2 }} />
        <Typography variant="h6" color="inherit" noWrap>
          Home
        </Typography>
      </Toolbar>
    </Link>
  </AppBar>
);

export default Header;
