import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SideBar from './SideBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <SideBar />
        <footer className="App-footer">
          Chungnam National Universitity(CNU)
        </footer>
      </div>
    );
  }
}

export default App;
