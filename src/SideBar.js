import React, { Component } from 'react';
import logo from './logo.svg';
import './SideBar.css';

class SideBar extends Component {
    render() {
        return (
            <nav className="App-sidebar">
                <img src={logo} className="App-logo" alt="logo" />
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Clients</a>
                <a href="#">Contact</a>
            </nav>
        );
    }
}

export default SideBar;