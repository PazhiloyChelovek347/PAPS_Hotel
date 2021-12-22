import React from 'react';
import {
  AppBar, Button, Link, Switch, Toolbar, Typography,
} from '@mui/material';
import { DocumentScanner } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { userSetRequest } from 'src/app/actions/user';

const Header = () => {
  const dispatch = useDispatch();
  // @ts-ignore
  const isLogedIn = useSelector((state) => state.userReducer?.isLogedIn);
  // @ts-ignore
  const isAdmin = useSelector((state) => state.userReducer?.isAdmin);
  // const a = 1;
  return (
    <AppBar position="relative" style={{ backgroundColor: '#1565c0' }}>
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
        <span style={{ display: 'flex' }}>
          <Link href="/" underline="none" color="white">
            <DocumentScanner sx={{ mr: 2 }} />
          </Link>
          <Link href="/" underline="none" color="white">
            <Typography variant="h6" color="inherit" noWrap>
              Home
            </Typography>
          </Link>
        </span>
        <span>
          Admin
          <Switch onClick={() => dispatch(userSetRequest({ isAdmin: !isAdmin }))} />
          Log
          <Switch onClick={() => dispatch(userSetRequest({ isLogedIn: !isLogedIn }))} />
        </span>
        <Link href="/account" underline="none" color="white">
          <span style={!isLogedIn ? { visibility: 'hidden' } : {}}>
            <Button variant="contained" color="secondary">
              ACCOUNT
            </Button>
          </span>
        </Link>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
