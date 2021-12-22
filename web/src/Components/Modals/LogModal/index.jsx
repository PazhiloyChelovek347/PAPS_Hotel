/* eslint-disable no-param-reassign */
import React, { useState } from 'react';
import {
  Modal,
  Paper,
  Typography,
  TextField,
  Button,
} from '@mui/material';
import {
  createStyles,
  makeStyles,
} from '@mui/styles';

const useStyles = makeStyles(() => createStyles({
  paper: {
    width: 500,
    height: 275,
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

const LogModal = ({ open, toggleOpen, toggleReg }) => {
  const classes = useStyles();
  const [user, setUser] = useState({});
  const handleChange = (event) => {
    setUser({ ...user, [event.target.id]: event.target.value });
  };

  return (
    <Modal
      open={open}
      onClose={toggleOpen}
    >
      <Paper className={classes.paper}>
        <Typography>Login</Typography>
        <div className={classes.divWithInput}>
          <span>Login: </span>
          <TextField
            id="login"
            variant="outlined"
            className={classes.textFields}
            onChange={handleChange}
          />
        </div>
        <div className={classes.divWithInput}>
          <span>Password: </span>
          <TextField
            id="password"
            variant="outlined"
            className={classes.textFields}
            onChange={handleChange}
          />
        </div>
        <div className={classes.divWithInput}>
          <Button
            variant="contained"
            color="error"
            onClick={toggleOpen}
          >
            Close
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              toggleOpen();
              toggleReg();
            }}
          >
            SignUp
          </Button>
          <Button variant="contained" color="success">Login</Button>
        </div>
      </Paper>
    </Modal>
  );
};
export default LogModal;
