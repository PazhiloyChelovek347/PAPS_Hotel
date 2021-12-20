import React, { useEffect } from 'react';
import Header from 'src/Components/Header';
import GridWithCards from 'src/Components/DynamicGrid';
import { useDispatch, useSelector } from 'react-redux';
import DotLoader from 'src/Components/Loaders/DotLoader';
import MainContainer from 'src/Components/MainContainer';
import HotelTable from 'src/Components/Table';
import { Container } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import { getTabsRequest } from '../../app/actions/tabs';

const useStyles = makeStyles((theme) => createStyles({
  tableContainer: {
    marginTop: 50,
  },
}));

function MainTable() {
  const dispatch = useDispatch();
  // @ts-ignore
  const tabs = useSelector((state) => state.tabsReducer?.tabs);
  // @ts-ignore
  const loading = useSelector((state) => state.tabsReducer?.loading);

  const classes = useStyles();

  useEffect(() => {
    dispatch(getTabsRequest());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Container className={classes.tableContainer}>
        <HotelTable />
      </Container>
    </>
  );
}

export default MainTable;