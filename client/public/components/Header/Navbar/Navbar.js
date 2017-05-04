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
    if (this.state.menuOpen === true) {
      this.setState({menuOpen: false});
    }
    else {
      this.setState({menuOpen: true});
    }
    this.props.onUpdate(this.state.menuOpen);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({menuOpen: nextProps.update});
  }

  render(){
    return (
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
    );
  }
}

export default Navbar;
