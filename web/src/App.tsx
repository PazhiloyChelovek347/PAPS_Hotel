import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import MainTable from './Pages/MainTable';
import AccPage from './Pages/AccPage';

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
        <Routes>
          <Route path="/account" element={<AccPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
