import React from 'react';
import './Modal.css';

const modal = (props) => {
  const show = !!props.show;

  return (
    <div className={`Modal ${show ? 'Open' : 'Close'}`}>
      <h1>A Modal</h1>
      <button className="Button" onClick={props.closed}>
        Dismiss
      </button>
    </div>
  );
};

export default modal;
