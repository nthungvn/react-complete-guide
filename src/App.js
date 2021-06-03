import React, { Component } from 'react';
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

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <Modal
          show={this.state.modalIsOpen}
          closed={this.closeModalHandler.bind(this)}
        />
        <Backdrop show={this.state.modalIsOpen} />
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
