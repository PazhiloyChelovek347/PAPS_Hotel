import React from 'react';
import './style.css';

const DotLoader = () => (
  <div className="lds-roller" style={{ marginLeft: '50%', marginTop: '20%', transform: 'translate("-50%", "-50%"' }}>
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
  </div>
);

export default DotLoader;
