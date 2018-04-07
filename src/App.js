import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SideBar from './SideBar';
import Content from './Content';
import Home from './Home'
import About from './About'
import Services from './Services'
import Clients from './Clients'
import Contact from './Contact'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page : 'Home'
    };
  }

  setPage(page) { 
    this.setState({
      page
    });
  }

  getPage() {
    const { page } = this.state;
    if(page ==='Home') {
      return <Home />;
    }
    else if(page ==='Home') {
      return <Home />;
    }
    else if(page ==='About') {
      return <About />;
    }
    else if(page ==='Services') {
      return <Services />;
    }
    else if(page ==='Clients') {
      return <Clients />;
    }
    else if(page ==='Contact') {
      return <Contact />;
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">
            {this.state.page === 'Home' ?
            'Home' :
            `Home > ${this.state.page}`}
          </h1>
        </header>
        <SideBar onPageSelect={(page) => { this.setPage(page)}} />
        <Content page={this.getPage()}/> 
        <footer className="App-footer">
          Chungnam National Universitity(CNU)
        </footer>
      </div>
    );
  }
}

export default App;
