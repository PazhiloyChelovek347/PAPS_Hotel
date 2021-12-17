/* eslint-disable no-param-reassign */
import React, { useState } from 'react';
import {
  AppBar, Container, Modal, Paper, Toolbar, Typography,
} from '@mui/material';
import { DocumentScanner } from '@mui/icons-material';
import { TextField } from '@material-ui/core';
import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => createStyles({
  paper: {
    width: 500,
    height: 250,
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
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 425,
  },
  textFields: {
    width: 325,
  },
}));

const LogModal = ({ open, toggleOpen }) => {
  const classes = useStyles();
  return (
    <Modal
      open={open}
      onClose={() => { open = !open; }}
    >
      <Paper className={classes.paper}>
        <Typography>Registration</Typography>
        <div className={classes.divWithInput}>
          <span>Login: </span>
          <TextField variant="outlined" className={classes.textFields} />
        </div>
        <div className={classes.divWithInput}>
          <span>Password: </span>
          <TextField variant="outlined" className={classes.textFields} />
        </div>
        <div className={classes.divWithInput}>
          <span>FIO: </span>
          <TextField variant="outlined" className={classes.textFields} />
        </div>
      </Paper>
    </Modal>
  );
};
export default LogModal;
