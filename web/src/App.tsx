import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import HomePage from './Pages/HomePage';
import { getTabsRequest } from './app/actions/tabs';

function App() {
  return (
    <>
      <HomePage />
    </>
  );
}

export default App;
