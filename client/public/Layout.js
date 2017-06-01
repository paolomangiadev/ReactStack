import React, { Component } from 'react';
import { render } from 'react-dom';
import {Router, Route, BrowserRouter, Switch } from 'react-router-dom';
import classNames from 'classnames';
import Navbar from './components/Navbar';
import Menu from './components/Navbar/Menu';
import Footer from './components/Footer';
import Back2Top from './components/Back2Top';
import { HashLink as Link } from 'react-router-hash-link';
import css from './Responsive.css';

// ALL ROUTES
import Home from './views/Home'; //home page
import Services from './views/Services'; //webdesign page

let html = document.getElementsByTagName( 'html' )[0];
class Layout extends Component {
  constructor(props){
    super(props);
    this.state = {
      menuopen: false
    }
  }

  onUpdate(menuState) {
    if (menuState === false) {
      this.setState({menuopen: true});
      html.classList.add("noscroll");
    }
    else {
      this.setState({menuopen: false});
      html.classList.remove("noscroll");
    }
  }

  render(){
    return (
      <div className={classNames('appwrapper', {menuopen: this.state.menuopen})}>
        <BrowserRouter>
          <main>
            <Navbar onUpdate={this.onUpdate.bind(this)}/>
            <div className="black-bg"></div>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/services/:service" component={Services}/>
            </Switch>
            <Back2Top />
            <Footer />
          </main>
        </BrowserRouter>
      </div>
    );
  }
}


export default Layout;
