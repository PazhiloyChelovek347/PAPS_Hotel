import React, { useEffect } from 'react';
import Header from 'src/Components/Header';
import GridWithCards from 'src/Components/DynamicGrid';
import { useDispatch, useSelector } from 'react-redux';
import DotLoader from 'src/Components/Loaders/DotLoader';
import { getTabsRequest } from '../../app/actions/tabs';

function HomePage() {
  const dispatch = useDispatch();
  // @ts-ignore
  const tabs = useSelector((state) => state.tabsReducer?.tabs);
  // @ts-ignore
  const loading = useSelector((state) => state.tabsReducer?.loading);

  useEffect(() => {
    dispatch(getTabsRequest());
  }, [dispatch]);

  return (
    <>
      <Header />
      {loading ? <DotLoader />
        : <GridWithCards cards={tabs} />}
    </>
  );
}

export default HomePage;
