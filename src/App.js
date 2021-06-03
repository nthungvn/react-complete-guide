import React, { Component } from 'react';
import { Transition } from 'react-transition-group';
import './App.css';
import Backdrop from './components/Backdrop/Backdrop';
import List from './components/List/List';
import Modal from './components/Modal/Modal';

class App extends Component {
  state = {
    modalIsOpen: false,
  };

  closeModalHandler() {
    this.setState({ modalIsOpen: false });
  }

  openModalHandler() {
    this.setState({ modalIsOpen: true });
  }

  toggleHandler = () => {
    this.setState((prevState) => ({ modalIsOpen: !prevState.modalIsOpen }));
  };

  render() {
    const timing = {
      enter: 400,
      exit: 1000,
    };
    return (
      <div className="App">
        <h1>React Animations</h1>
        <button className="Button" onClick={this.toggleHandler}>
          Toggle
        </button>
        <Transition
          in={this.state.modalIsOpen}
          timeout={timing}
          mountOnEnter
          unmountOnExit
          onEnter={() => console.log('Enter')}
          onEntering={() => console.log('Entering')}
          onEntered={() => console.log('Entered')}
          onExit={() => console.log('Exit')}
          onExiting={() => console.log('Exiting')}
          onExited={() => console.log('Exited')}
        >
          {(state) => {
            const opacityVal =
              state === 'exiting' ? 0 : state === 'entering' ? 1 : null;

            return (
              <div
                style={{
                  backgroundColor: 'red',
                  width: 100,
                  height: 100,
                  margin: 'auto',
                  transition: 'all 1s ease-out',
                  opacity: opacityVal,
                }}
              ></div>
            );
          }}
        </Transition>
        <br />
        {/* {this.state.modalIsOpen && (
          <Modal
            show={this.state.modalIsOpen}
            closed={this.closeModalHandler.bind(this)}
          />
        )}
        {this.state.modalIsOpen && <Backdrop show={this.state.modalIsOpen} />} */}
        <button className="Button" onClick={this.openModalHandler.bind(this)}>
          Open Modal
        </button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
