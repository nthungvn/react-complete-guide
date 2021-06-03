import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './Modal.css';

const modal = (props) => {
  const animationTiming = {
    enter: 400,
    exit: 500,
  };

  const classNames = {
    enterActive: 'Open',
    exitActive: 'Close',
  };

  return (
    <CSSTransition
      in={props.show}
      timeout={animationTiming}
      mountOnEnter
      unmountOnExit
      classNames={classNames}
    >
      {(state) => (
        <div className={`Modal`}>
          <h1>A Modal</h1>
          <button className="Button" onClick={props.closed}>
            Dismiss
          </button>
        </div>
      )}
    </CSSTransition>
  );
};

export default modal;
