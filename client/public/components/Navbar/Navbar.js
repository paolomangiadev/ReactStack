import React, { Component } from 'react';
import css from './Navbar.css';
import classNames from 'classnames';
import Menu from './Menu';
import smoothScroll from '../../external-libraries/smoothscroll/smooth-scroll.min.js';
import { HashLink as Link } from 'react-router-hash-link';
import history from '../../history';

class Navbar extends Component {
  constructor(props){
    super(props);
    this.state = {
      menuOpen: false,
      currentLocation: history.location.pathname
    }
  }

  componentDidMount() {
    // Listen for changes to the current location.
    history.listen((location, action) => {
      // location is an object like window.location
      this.setState({currentLocation: location.pathname});
    });
  }

  toggleMenu(){
    console.log('this is the current state: ' + this.state.menuOpen);
    if (this.state.menuOpen === true) {
      this.setState({menuOpen: false});
    }
    else {
      new Promise((resolve, reject) => {
        resolve(smoothScroll.animateScroll(0));
      }).then(() => {
        this.setState({menuOpen: true});
      });
      console.log('state has been set to: ' + this.state.menuOpen);
    }
    this.props.onUpdate(this.state.menuOpen);
  }

  goBack (){
    history.goBack();
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
            <div className="nav-left">
              <a onClick={this.goBack.bind(this)} className={classNames('nav-item', {backtoHome: this.state.currentLocation != "/"})}>
                <i className="fa fa-arrow-circle-left" aria-hidden="true"></i>
              </a>
            </div>
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
