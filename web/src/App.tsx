import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import HomePage from './Pages/HomePage';
import { getTabsRequest } from './app/actions/tabs';
import LogModal from './Components/Modals/LogModal';

function App() {
  return (
    <>
      <LogModal open toggleOpen="" />
      {/* <HomePage /> */}
    </>
  );
}

export default App;
