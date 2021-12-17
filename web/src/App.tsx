import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import HomePage from './Pages/HomePage';
import { getTabsRequest } from './app/actions/tabs';
import LogModal from './Components/Modals/LogModal';
import ConfirmModal from './Components/Modals/ConfirmModal';

function App() {
  return (
    <>
      <ConfirmModal open />
      {/* <HomePage /> */}
    </>
  );
}

export default App;
