import React from 'react';
import { Transition } from 'react-transition-group';
import './Modal.css';

const modal = (props) => {
  const show = !!props.show;

  return (
    <Transition in={show} timeout={400} mountOnEnter unmountOnExit>
      <div className={`Modal ${show ? 'Open' : 'Close'}`}>
        <h1>A Modal</h1>
        <button className="Button" onClick={props.closed}>
          Dismiss
        </button>
      </div>
    </Transition>
  );
};

export default modal;
