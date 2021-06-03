import React from 'react';
import { Transition } from 'react-transition-group';
import './Backdrop.css';

const backdrop = (props) => {
  const animationTiming = {
    enter: 400,
    exit: 500,
  };

  return (
    <Transition
      in={props.show}
      timeout={animationTiming}
      unmountOnExit
      mountOnEnter
    >
      {(state) => {
        return (
          <div
            className={`Backdrop ${
              state === 'entering' ? 'Open' : state === 'exiting' ? 'Close' : ''
            }`}
          ></div>
        );
      }}
    </Transition>
  );
};

export default backdrop;
