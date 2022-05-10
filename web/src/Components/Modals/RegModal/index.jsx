/* eslint-disable no-param-reassign */
import React, { useState } from 'react';
import {
  Modal,
  Paper,
  Typography,
  TextField,
  Button,
  FormControl,
} from '@mui/material';
import {
  createStyles,
  makeStyles,
} from '@mui/styles';
import { useDispatch } from 'react-redux';
import { regRequest } from 'src/app/actions/user';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';

const useStyles = makeStyles(() => createStyles({
  paper: {
    width: 500,
    height: 350,
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

const RegModal = ({ open, toggleOpen, toggleLog }) => {
  const classes = useStyles();
  const [user, setUser] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const handleChange = (event) => {
    setUser({ ...user, [event.target.id]: event.target.value });
  };
  const dispatch = useDispatch();

  return (
    <Modal
      open={open}
      onClose={toggleOpen}
    >
      <Paper className={classes.paper}>
        <Typography>Registration</Typography>
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
            type={showPassword ? 'text' : 'password'}
            variant="outlined"
            className={classes.textFields}
            onChange={handleChange}
            style={{ width: 285, 'padding-left': 31 }}
            error={showPassword}
            helperText={showPassword && 'Incorrect entry.'}
          />
          <IconButton
            aria-label="toggle password visibility"
            onClick={() => {
              setShowPassword(!showPassword);
            }}
          >
            {showPassword ? <Visibility /> : <VisibilityOff />}
          </IconButton>
        </div>
        <div className={classes.divWithInput}>
          <span>FIO: </span>
          <TextField
            id="fio"
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
              toggleLog();
            }}
          >
            SignIn
          </Button>
          <Button
            variant="contained"
            color="success"
            onClick={() => {
              dispatch(regRequest(user));
              if (JSON.parse(localStorage.getItem('isLogedIn'))) {
                toggleOpen();
              } else {
                //
              }
            }}
          >
            Confirm
          </Button>
        </div>
      </Paper>
    </Modal>
  );
};
export default RegModal;
