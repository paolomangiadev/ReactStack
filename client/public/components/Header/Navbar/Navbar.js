import React, { Component } from 'react';
import css from './Navbar.css';

class Navbar extends Component {
  componentDidMount() {
  }
  render(){
    return (
    <div className="hero-head custom-header">
      <header className="nav">
        <div className="container">
          <div className="nav-left">
            <a className="nav-item">
            </a>
          </div>
          <span className="nav-toggle">
            <span></span>
            <span></span>
            <span></span>
          </span>
          <div className="nav-right nav-menu">
            <a className="nav-item is-active">
              Home
            </a>
            <a className="nav-item">
              Examples
            </a>
            <a className="nav-item">
              Documentation
            </a>
            <span className="nav-item">
              <a className="button is-primary is-inverted">
                <span className="icon">
                </span>
                <span>Download</span>
              </a>
            </span>
          </div>
        </div>
      </header>
    </div>
    );
  }
}

export default Navbar;
