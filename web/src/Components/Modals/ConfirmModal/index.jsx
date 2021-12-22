/* eslint-disable no-param-reassign */
import React, { useState } from 'react';
import {
  AppBar, Button, Container, Modal, Paper, Toolbar, Typography,
} from '@mui/material';
import { DocumentScanner } from '@mui/icons-material';
import { createStyles, makeStyles } from '@mui/styles';
import { useDispatch } from 'react-redux';
import { delHotelRequest, editHotelRequest } from 'src/app/actions/hotels';

const useStyles = makeStyles((theme) => createStyles({
  paper: {
    width: 375,
    height: 200,
    marginLeft: '50%',
    marginTop: '20%',
    transform: 'translate(-50%, 0)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 15,
    justifyContent: 'center',
  },
  divWithInput: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: 350,
  },
  textFields: {
    width: 325,
  },
}));

const ConfirmModal = ({
  allForModal: {
    open = false,
    toggleOpen = () => {},
    action = 'this',
    setConfirm = () => {},
    newHotel = {},
  },
}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <Modal
      open={open}
      onClose={toggleOpen}
    >
      <Paper className={classes.paper}>
        <Typography variant="h5">{`Are you sure about ${action}`}</Typography>
        <div className={classes.divWithInput}>
          <Button
            onClick={() => {
              setConfirm(false);
              toggleOpen();
            }}
            variant="contained"
            color="error"
          >
            Cancel
          </Button>
          <Button
            onClick={() => {
              setConfirm(true);
              if (action === 'editing') dispatch(editHotelRequest(newHotel));
              if (action === 'delete') dispatch(delHotelRequest(newHotel.id));
              toggleOpen();
            }}
            variant="contained"
            color="success"
          >
            Confirm
          </Button>
        </div>
      </Paper>
    </Modal>
  );
};
export default ConfirmModal;
