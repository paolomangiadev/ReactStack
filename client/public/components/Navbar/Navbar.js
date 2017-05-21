import React, { Component } from 'react';
import css from './Navbar.css';
import classNames from 'classnames';
import Menu from './Menu';

class Navbar extends Component {
  constructor(props){
    super(props);
    this.state = {
      menuOpen: false
    }
  }

  toggleMenu(){
    console.log('this is the current state: ' + this.state.menuOpen);
    if (this.state.menuOpen === true) {
      this.setState({menuOpen: false});
    }
    else {
      this.setState({menuOpen: true});
      console.log('state has been set to: ' + this.state.menuOpen);
    }
    this.props.onUpdate(this.state.menuOpen);
  }

  redirect(clicked) {
    this.setState({menuOpen: clicked});
    this.props.onUpdate(this.state.menuOpen);
  }

  render(){
    return (
    <div className="NavbarWrapper">
      <div className="hero-head custom-header">
        <header className="nav">
          <div className="container">
            <div className="toggle-menu">
              <a className="anchor_wrapper" onClick={this.toggleMenu.bind(this)}>
              <div className={classNames('toggle-menu_wrapper', {openMenu: this.state.menuOpen})}>
                <span className="toggle-menu_line toggle-menu_line-first"></span>
                <span className="toggle-menu_line toggle-menu_line-second"></span>
                <span className="toggle-menu_line toggle-menu_line-third"></span>

                <div className="toggle-menu_cross-wrapper">
                <span className="toggle-menu_line toggle-menu_cross-first"></span>
                <span className="toggle-menu_line toggle-menu_cross-second"></span>
                </div>
              </div>
              </a>
            </div>
          </div>
        </header>
      </div>
      <Menu redirect={this.redirect.bind(this)}/>
    </div>
    );
  }
}

export default Navbar;
