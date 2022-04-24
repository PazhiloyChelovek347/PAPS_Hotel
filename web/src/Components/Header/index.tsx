import React, { useState } from 'react';
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
import { setHotelModal } from 'src/app/actions/hotels';

const Header = () => {
  const dispatch = useDispatch();
  // @ts-ignore
  const isLogedIn = useSelector((state) => state.userReducer?.isLogedIn);
  // @ts-ignore
  const isAdmin = useSelector((state) => state.userReducer?.isAdmin);
  // @ts-ignore
  const bookings = useSelector((state) => state.userReducer?.bookings);
  // @ts-ignore
  const hotelModalData = useSelector((state) => state.hotelsReducer?.hotelModalData);

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
          <div style={{ width: 350, display: 'flex', justifyContent: 'space-between' }}>
            <span>
              hotels
              <Switch
                checked={bookings}
                onClick={() => dispatch(userSetRequest({ bookings: !bookings }))}
              />
              bookings
            </span>
            {!bookings && (
              <Button variant="contained" color="success" onClick={() => { dispatch(setHotelModal({ open: !hotelModalData.open })); }}>
                Add hotel
              </Button>
            )}
          </div>
        )}
        <span>
          {(isLogedIn && !isAdmin) && (
            <Link href="/account" underline="none" color="white">
              <span>
                <Button variant="contained" color="secondary">
                  ACCOUNT
                </Button>
              </span>
            </Link>
          )}
          {isLogedIn && (
            <Button
              variant="contained"
              color="error"
              onClick={() => {
                dispatch(logoutRequest());
              }}
            >
              Logout
            </Button>
          )}
        </span>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
