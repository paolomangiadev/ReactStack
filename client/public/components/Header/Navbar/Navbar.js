import React, { Component } from 'react';
import css from './Navbar.css';
import classNames from 'classnames';

const mimmo = 'mimmo';

class Navbar extends Component {
  constructor(props){
    super(props);
    this.state = {
      menuOpen: false
    }
  }

  initialState(){
    return this.state.menuOpen;
  }

  toggleMenu(){
    console.log(this.state.menuOpen);
    if (this.state.menuOpen === true) {
      return false;
    }
    else {
      return true;
    }
  }


  render(){
    return (
    <div className="hero-head custom-header">
      <header className="nav">
        <div className="container">
          <div className="toggle-menu">
            <a className="anchor_wrapper" onClick={this.toggleMenu.bind(this)}>
            <div className="toggle-menu_wrapper">
              <span className={classNames('toggle-menu_line', 'toggle-menu_line-first', {openMenu: this.props.menuOpen})}></span>
              <span className={classNames('toggle-menu_line', 'toggle-menu_line-second', {openMenu: this.props.menuOpen})}></span>
              <span className={classNames('toggle-menu_line', 'toggle-menu_line-third', {openMenu: this.props.menuOpen})}></span>
            </div>
            </a>
          </div>
        </div>
      </header>
    </div>
    );
  }
}

export default Navbar;
