import React, { Component } from 'react';
import './App.css';
import Backdrop from './components/Backdrop/Backdrop';
import List from './components/List/List';
import Modal from './components/Modal/Modal';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <Modal />
        <Backdrop />
        <button className="Button">Open Modal</button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
