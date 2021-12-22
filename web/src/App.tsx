import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import { getHotelsRequest } from './app/actions/hotels';
import LogModal from './Components/Modals/LogModal';
import ConfirmModal from './Components/Modals/ConfirmModal';
import MainTable from './Pages/MainTable';
import { setTestData } from './utils/hardcodeLS';
import RegModal from './Components/Modals/RegModal';
import AccPage from './Pages/AccPage';

function App() {
  // useEffect(() => {
  //   const items: any = JSON.parse(localStorage.getItem('Hotels') as any);
  //   if (!items) {
  //     setTestData();
  //   }
  //   // useDispatch()
  // }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/" element={<RegModal open toggleOpen={() => {}} />} /> */}
        </Routes>
        <Routes>
          <Route path="/main" element={<MainTable />} />
        </Routes>
        <Routes>
          <Route path="/account" element={<AccPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
