import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import HomePage from './Pages/HomePage';
import { getTabsRequest } from './app/actions/tabs';
import RegModal from './Components/Modals/RegModal';

function App() {
  return (
    <>
      <RegModal open toggleOpen="" />
      {/* <HomePage /> */}
    </>
  );
}

export default App;
