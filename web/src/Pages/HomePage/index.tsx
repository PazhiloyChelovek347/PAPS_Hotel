import React, { useEffect } from 'react';
import Header from 'src/Components/Header';
import GridWithCards from 'src/Components/DynamicGrid';
import { useDispatch, useSelector } from 'react-redux';
import DotLoader from 'src/Components/Loaders/DotLoader';
import MainContainer from 'src/Components/MainContainer';
import { getHotelsRequest } from '../../app/actions/hotels';

function HomePage() {
  const dispatch = useDispatch();
  // @ts-ignore
  const tabs = useSelector((state) => state.tabsReducer?.tabs);
  // @ts-ignore
  const loading = useSelector((state) => state.tabsReducer?.loading);

  useEffect(() => {
    dispatch(getHotelsRequest());
  }, [dispatch]);

  return (
    <>
      <Header />
      <MainContainer />
    </>
  );
}

export default HomePage;
