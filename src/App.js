import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SideBar from './SideBar';
import Content from './Content';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page : 'Home'
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">
            {this.state.page === 'Home' ?
            'Home' :
            `Home > ${this.state.page}`}
          </h1>
        </header>
        <SideBar />
        <Content />
        <footer className="App-footer">
          Chungnam National Universitity(CNU)
        </footer>
      </div>
    );
  }
}

export default App;
