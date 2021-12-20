import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import { getTabsRequest } from './app/actions/tabs';
import LogModal from './Components/Modals/LogModal';
import ConfirmModal from './Components/Modals/ConfirmModal';
import MainTable from './Pages/MainTable';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Routes>
          <Route path="/main" element={<MainTable />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
