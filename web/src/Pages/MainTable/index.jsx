import React, { useEffect, useState } from 'react';
import Header from 'src/Components/Header';
import GridWithCards from 'src/Components/DynamicGrid';
import { useDispatch, useSelector } from 'react-redux';
import DotLoader from 'src/Components/Loaders/DotLoader';
import MainContainer from 'src/Components/MainContainer';
import HotelTable from 'src/Components/Table';
import { Container } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import HotelModal from 'src/Components/Modals/HotelModal';
import { getHotelsRequest } from '../../app/actions/hotels';

const useStyles = makeStyles((theme) => createStyles({
  tableContainer: {
    marginTop: 50,
  },
}));

function MainTable() {
  const dispatch = useDispatch();
  const hotels = useSelector((state) => state.hotelsReducer?.hotels);
  const classes = useStyles();
  const [allForModal, setAllForModal] = useState({});

  useEffect(() => {
    dispatch(getHotelsRequest());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Container className={classes.tableContainer}>
        <HotelModal allForModal={allForModal} />
        <HotelTable rows={hotels} setAllForModal={setAllForModal} />
      </Container>
    </>
  );
}

export default MainTable;
