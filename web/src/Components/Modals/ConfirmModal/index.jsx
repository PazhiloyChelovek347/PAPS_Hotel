/* eslint-disable no-param-reassign */
import React, { useState } from 'react';
import {
  AppBar, Button, Container, Modal, Paper, Toolbar, Typography,
} from '@mui/material';
import { DocumentScanner } from '@mui/icons-material';
import { TextField } from '@material-ui/core';
import { createStyles, makeStyles } from '@mui/styles';

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

const ConfirmModal = ({ open = false, toggleOpen = () => {}, action = 'this' }) => {
  const classes = useStyles();
  return (
    <Modal
      open={open}
      onClose={() => { open = !open; }}
    >
      <Paper className={classes.paper}>
        <Typography variant="h5">{`Are you sure about ${action}`}</Typography>
        <div className={classes.divWithInput}>
          <Button variant="contained" color="error">Cancel</Button>
          <Button variant="contained" color="success">Confirm</Button>
        </div>
      </Paper>
    </Modal>
  );
};
export default ConfirmModal;
