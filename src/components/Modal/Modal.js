import React from 'react';
import { Transition } from 'react-transition-group';
import './Modal.css';

const modal = (props) => {
  return (
    <Transition in={props.show} timeout={400} mountOnEnter unmountOnExit>
      {(state) => (
        <div
          className={`Modal ${
            state === 'entering' ? 'Open' : state === 'exiting' ? 'Close' : ''
          }`}
        >
          <h1>A Modal</h1>
          <button className="Button" onClick={props.closed}>
            Dismiss
          </button>
        </div>
      )}
    </Transition>
  );
};

export default modal;
