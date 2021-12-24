/* eslint-disable no-param-reassign */
import React, { useEffect, useState } from 'react';
import {
  AppBar, Container, Modal, Paper, Toolbar, Typography,
  TextField,
  Button,
} from '@mui/material';
import { DocumentScanner } from '@mui/icons-material';
import { createStyles, makeStyles } from '@mui/styles';
import { useSelector } from 'react-redux';
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
  const classes = useStyles();
  const isAdmin = useSelector((state) => state.userReducer?.isAdmin);
  const isLogedIn = useSelector((state) => state.userReducer?.isLogedIn);
  const [newHotel, setNewHotel] = useState({});

  const handleChange = (event) => {
    setNewHotel((p) => ({ ...p, [event.target.id]: event.target.value }));
  };
  return (
    <Modal
      open={open}
      onClose={() => { toggleOpen(); setNewHotel({}); }}
    >
      <Paper className={classes.paper}>
        <span>
          <Typography variant="h5">
            {`Hotel "${hotel?.name}"`}
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
                defaultValue={hotel?.name}
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
              defaultValue={hotel?.city}
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
              defaultValue={hotel?.rooms}
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
              id="class"
              defaultValue={hotel?.hclass}
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
              defaultValue={hotel?.price}
              variant="outlined"
              className={classes.textFields}
              disabled={!isAdmin}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className={classes.divWithButtons}>
          <Button variant="contained" onClick={toggleOpen}>Close</Button>
          {isAdmin && (
          <Button
            onClick={() => setAllConfirm((p) => ({
              ...p, open: true, action: 'editing', newHotel: { ...hotel, ...newHotel },
            }))}
            variant="contained"
            color="success"
          >
            Edit
          </Button>
          )}
          {isAdmin && (
          <Button
            onClick={() => {
              setAllConfirm((p) => ({
                ...p, open: true, action: 'delete', id: hotel.id, toggleHotel: toggleOpen,
              }));
            }}
            variant="contained"
            color="error"
          >
            Delete
          </Button>
          )}
          {!isAdmin && isLogedIn && (
          <Button
            onClick={() => setAllConfirm((p) => ({
              ...p, open: true, action: 'booking',
            }))}
            variant="contained"
          >
            Book
          </Button>
          )}
        </div>
      </Paper>
    </Modal>
  );
};
export default HotelModal;
