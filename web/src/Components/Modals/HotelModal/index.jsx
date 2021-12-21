/* eslint-disable no-param-reassign */
import React, { useState } from 'react';
import {
  AppBar, Container, Modal, Paper, Toolbar, Typography,
  TextField,
  Button,
} from '@mui/material';
import { DocumentScanner } from '@mui/icons-material';
import { createStyles, makeStyles } from '@mui/styles';

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

const HotelModal = ({ allForModal: { open, toggleOpen, hotel } }) => {
  const classes = useStyles();
  const isAdmin = true;
  return (
    <Modal
      open={open}
      onClose={() => { toggleOpen(); }}
    >
      <Paper className={classes.paper}>
        <span><Typography variant="h5">{`Hotel "${hotel?.name}"`}</Typography></span>
        <div className={classes.cont}>
          {isAdmin && (
            <div className={classes.divWithInput}>
              <span>
                Name:
              </span>
              <TextField value={hotel?.name} variant="outlined" className={classes.textFields} disabled={!isAdmin} />
            </div>
          )}
          <div className={classes.divWithInput}>
            <span>
              City:
            </span>
            <TextField value={hotel?.city} variant="outlined" className={classes.textFields} disabled={!isAdmin} />
          </div>
          <div className={classes.divWithInput}>
            <span>
              Rooms:
            </span>
            <TextField value={hotel?.rooms} variant="outlined" className={classes.textFields} disabled={!isAdmin} />
          </div>
          <div className={classes.divWithInput}>
            <span>
              Class:
            </span>
            <TextField value={hotel?.hclass} variant="outlined" className={classes.textFields} disabled={!isAdmin} />
          </div>
          <div className={classes.divWithInput}>
            <span>
              Price:
            </span>
            <TextField value={hotel?.price} variant="outlined" className={classes.textFields} disabled={!isAdmin} />
          </div>
          {isAdmin && (
            <div className={classes.divWithInput}>
              <span>
                Name:
              </span>
              <TextField value={hotel?.name} variant="outlined" className={classes.textFields} disabled={!isAdmin} />
            </div>
          )}
        </div>
        <div className={classes.divWithButtons}>
          <Button variant="contained">Close</Button>
          {isAdmin && <Button variant="contained" color="success">Edit</Button>}
          {isAdmin && <Button variant="contained" color="error">Delete</Button>}
          {!isAdmin && <Button variant="contained">Book</Button>}
        </div>
      </Paper>
    </Modal>
  );
};
export default HotelModal;
