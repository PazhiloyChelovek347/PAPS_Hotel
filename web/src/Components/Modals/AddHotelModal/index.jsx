/* eslint-disable no-param-reassign */
import React, { useEffect, useState } from 'react';
import {
  AppBar, Container, Modal, Paper, Toolbar, Typography,
  TextField,
  Button,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { DocumentScanner } from '@mui/icons-material';
import { createStyles, makeStyles } from '@mui/styles';
import { setHotelModal } from 'src/app/actions/hotels';
import ConfirmModal from '../ConfirmModal';

const useStyles = makeStyles((theme) => createStyles({
  paper: {
    width: 500,
    height: 425,
    padding: 20,
    marginLeft: '50%',
    marginTop: '20%',
    transform: 'translate(-50%, 0)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    rowGap: 25,
  },
  cont: {
    height: 400,
    overflowX: 'auto',
  },
  divWithInput: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 425,
    marginBottom: 15,
  },
  divWithButtons: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: 425,
    marginBottom: 15,
  },
  textFields: {
    width: 325,
  },
}));

const HotelModal = ({ allForModal: { open, toggleOpen, hotel = {} }, setAllConfirm = () => {} }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const isAdmin = useSelector((state) => state.userReducer?.isAdmin);
  const isLogedIn = useSelector((state) => state.userReducer?.isLogedIn);
  const [newHotel, setNewHotel] = useState({});
  // const open = useSelector((state) => state.hotelsReducer?.hotelModalData.open);
  const hotelModalData = useSelector((state) => state.hotelsReducer?.hotelModalData);

  const handleChange = (event) => {
    setNewHotel((p) => ({ ...p, [event.target.id]: event.target.value }));
  };

  useEffect(() => {
  });

  return (
    <Modal
      open={open}
      onClose={() => {
        dispatch(setHotelModal({ open: !open }));
        setNewHotel({});
      }}
    >
      <Paper className={classes.paper}>
        <span>
          <Typography variant="h5">
            New hotel:
          </Typography>
        </span>
        <div className={classes.cont}>
          {isAdmin && (
            <div className={classes.divWithInput}>
              <span>
                Name:
              </span>
              <TextField
                id="name"
                defaultValue=""
                variant="outlined"
                className={classes.textFields}
                disabled={!isAdmin}
                onChange={handleChange}
              />
            </div>
          )}
          <div className={classes.divWithInput}>
            <span>
              City:
            </span>
            <TextField
              id="city"
              defaultValue=""
              variant="outlined"
              className={classes.textFields}
              disabled={!isAdmin}
              onChange={handleChange}
            />
          </div>
          <div className={classes.divWithInput}>
            <span>
              Rooms:
            </span>
            <TextField
              id="rooms"
              defaultValue=""
              variant="outlined"
              className={classes.textFields}
              disabled={!isAdmin}
              onChange={handleChange}
            />
          </div>
          <div className={classes.divWithInput}>
            <span>
              Class:
            </span>
            <TextField
              id="hclass"
              defaultValue=""
              variant="outlined"
              className={classes.textFields}
              disabled={!isAdmin}
              onChange={handleChange}
            />
          </div>
          <div className={classes.divWithInput}>
            <span>
              Price:
            </span>
            <TextField
              id="price"
              defaultValue=""
              variant="outlined"
              className={classes.textFields}
              disabled={!isAdmin}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className={classes.divWithButtons}>
          {isAdmin && (
            <Button
              onClick={() => setAllConfirm((p) => ({
                ...p, open: true, action: 'adding hotel', newHotel: { ...hotel, ...newHotel, id: Number(JSON.parse(localStorage.getItem('ids'))) },
              }))}
              variant="contained"
              color="success"
            >
              Add
            </Button>
          )}
          {isAdmin && (
            <Button
              onClick={() => {
                setAllConfirm((p) => ({
                  ...p, open: true, action: 'cancel', id: hotel.id, toggleHotel: toggleOpen,
                }));
              }}
              variant="contained"
              color="error"
            >
              Cancel
            </Button>
          )}
        </div>
      </Paper>
    </Modal>
  );
};
export default HotelModal;
