import React, { useEffect, useState } from 'react';
import GridWithCards from 'src/Components/DynamicGrid';
import { useDispatch, useSelector } from 'react-redux';
import {
  Button, Card, Container, Link, Typography,
} from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import { getHotelsRequest } from '../../app/actions/hotels';
import RegModal from '../Modals/RegModal';
import LogModal from '../Modals/LogModal';

function MainContainer() {
  const [logOpen, setLogOpen] = useState(false);
  const [regOpen, setRegOpen] = useState(false);
  const dispatch = useDispatch();
  // const history = ();
  // @ts-ignore
  const isLogedIn = useSelector((state) => state.userReducer?.isLogedIn);
  // @ts-ignore
  const isAdmin = useSelector((state) => state.userReducer?.isAdmin);

  const useStyles = makeStyles(() => createStyles({
    infoContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: 50,
      width: '100%',
    },
    infoTitle: {

    },
    infoText: {

    },
    infoCard: {
      width: '25%',
    },
    duplet: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      alignItems: 'start',
      width: '70%',
    },
    bigBooba: {
      marginTop: 50,
      width: '100%',
      height: 200,
    },
  }));

  useEffect(() => {
    dispatch(getHotelsRequest());
  }, [dispatch]);

  const classes = useStyles();

  return (
    <Container>
      <RegModal
        open={regOpen}
        toggleOpen={() => setRegOpen((p) => !p)}
        toggleLog={() => setLogOpen((p) => !p)}
      />
      <LogModal
        open={logOpen}
        toggleOpen={() => setLogOpen((p) => !p)}
        toggleReg={() => setRegOpen((p) => !p)}
      />
      <Container className={classes.infoContainer}>
        <Card className={classes.infoCard}><Typography variant="h4">Your Logo can be there</Typography></Card>
        <div className={classes.duplet}>
          <Typography
            variant="h5"
            className={classes.infoTitle}
          >
            Sample Title
          </Typography>
          <Typography
            variant="body1"
            className={classes.infoText}
          >
            Sample text for info Sample text for info Sample text for info Sample text for info Sample text for info Sample text for info Sample text for info Sample text for info Sample text for info Sample text for info Sample text for info Sample text for info Sample text for info Sample text for info Sample text for info Sample text for info Sample text for info Sample text for info Sample text for info Sample text for info Sample text for info
          </Typography>
        </div>
      </Container>
      <Container>
        { isLogedIn && (
        <Link href="main">
          <Button
            className={classes.bigBooba}
            variant="contained"
            color="primary"
          // eslint-disable-next-line no-restricted-globals
            onClick={() => {
              console.log(111);
            }}
          >
            <Typography variant="h2">
              Let&apos;s start booking!
            </Typography>
          </Button>
        </Link>
        )}
        { !isLogedIn && (
          <Button
            className={classes.bigBooba}
            variant="contained"
            color="primary"
          // eslint-disable-next-line no-restricted-globals
            onClick={() => {
              setRegOpen((p) => !p);
            }}
          >
            <Typography variant="h2">
              Let&apos;s start booking!
            </Typography>
          </Button>
        )}
      </Container>
      <GridWithCards cards={[1, 2, 3, 4, 5, 6, 7]} />
    </Container>
  );
}

export default MainContainer;
