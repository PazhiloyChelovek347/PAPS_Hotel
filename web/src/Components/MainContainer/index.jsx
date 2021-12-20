import React, { useEffect } from 'react';
import Header from 'src/Components/Header';
import GridWithCards from 'src/Components/DynamicGrid';
import { useDispatch, useSelector } from 'react-redux';
import DotLoader from 'src/Components/Loaders/DotLoader';
import {
  Button, Card, Container, Typography,
} from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import { getTabsRequest } from '../../app/actions/tabs';

function MainContainer() {
  const dispatch = useDispatch();
  // @ts-ignore
  const tabs = useSelector((state) => state.tabsReducer?.tabs);
  // @ts-ignore
  const loading = useSelector((state) => state.tabsReducer?.loading);

  const useStyles = makeStyles((theme) => createStyles({
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
    dispatch(getTabsRequest());
  }, [dispatch]);

  const classes = useStyles();

  return (
    <Container>
      <Container className={classes.infoContainer}>
        <Card className={classes.infoCard}><Typography variant="h4">Your Logo can be there</Typography></Card>
        <div className={classes.duplet}>
          <Typography variant="h5" className={classes.infoTitle}>Sample Title</Typography>
          <Typography variant="body1" className={classes.infoText}>Sample text for info Sample text for info Sample text for info Sample text for info Sample text for info Sample text for info Sample text for info Sample text for info Sample text for info Sample text for info Sample text for info Sample text for info Sample text for info Sample text for info Sample text for info Sample text for info Sample text for info Sample text for info Sample text for info Sample text for info Sample text for info </Typography>
        </div>
      </Container>
      <Container>
        <Button className={classes.bigBooba} variant="contained" color="primary">
          <Typography variant="h2">
            Let&apos;s start booking!
          </Typography>
        </Button>
      </Container>
      <GridWithCards cards={[1, 2, 3, 4, 5, 6, 7]} />
    </Container>
  );
}

export default MainContainer;
