import React, { Component } from 'react';
import bulma from 'bulma/css/bulma.css';
import axios from 'axios';
import css from './Layout.css';
import Utils from '../utils/Utils';
import Header from './Header';
import Aboutus from './Aboutus';
import '../fonts/lato/lato.scss';

class Layout extends Component {
  componentDidMount() {
    const wow = Utils.registerWOW();
    wow.init();
  }
  render(){
    return (
      <div>
        <Header />
        <Aboutus />
      </div>
    );
  }
}

export default Layout;
