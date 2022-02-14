import React from 'react';
import {
  AppBar,
  Button,
  Link,
  Switch,
  Toolbar,
  Typography,
} from '@mui/material';
import { DocumentScanner } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { logoutRequest, userSetRequest } from 'src/app/actions/user';

const Header = () => {
  const dispatch = useDispatch();
  // @ts-ignore
  const isLogedIn = useSelector((state) => state.userReducer?.isLogedIn);
  // @ts-ignore
  const isAdmin = useSelector((state) => state.userReducer?.isAdmin);
  // @ts-ignore
  const bookings = useSelector((state) => state.userReducer?.bookings);

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
        {isAdmin && (
          <span>
            {/* Admin
          <Switch checked={isAdmin} onClick={() => dispatch(userSetRequest({ isAdmin: !isAdmin }))} />
          Log
          <Switch checked={isLogedIn} onClick={() => dispatch(userSetRequest({ isLogedIn: !isLogedIn }))} /> */}
            hotels
            <Switch
              checked={bookings}
              onClick={() => dispatch(userSetRequest({ bookings: !bookings }))}
            />
            bookings
          </span>
        )}
        <span>
          {isLogedIn && (
            <Link href="/account" underline="none" color="white">
              <span
                style={!isLogedIn || isAdmin ? { visibility: 'hidden' } : {}}
              >
                <Button variant="contained" color="secondary">
                  ACCOUNT
                </Button>
              </span>
            </Link>
          )}
          {isLogedIn && (
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                dispatch(logoutRequest());
              }}
            >
              Logout
            </Button>
          )}
          {!isLogedIn && <Button>Login</Button>}
        </span>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
