import React from 'react';
import './Backdrop.css';

const backdrop = (props) => {
  const show = !!props.show;
  return <div className={`Backdrop ${show ? 'Open' : 'Close'}`}></div>;
};

export default backdrop;
