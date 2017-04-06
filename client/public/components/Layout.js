import React, { Component } from 'react';
import bulma from 'bulma/css/bulma.css';
import FontAwesome from 'font-awesome/css/font-awesome.min.css';
import particles from '../external-libraries/particles/particles.min.js';
import axios from 'axios';
import css from './Layout.css';
import Utils from '../utils/Utils';
import Header from './Header';
import Aboutus from './Aboutus';
import Masonry from './Masonry';
import '../fonts/lato/lato.scss';
import '../fonts/OpenSans/OpenSans.scss';

class Layout extends Component {
  componentDidMount() {
    //init of WOWJS
    const wow = Utils.registerWOW();
    wow.init();

    //init of particlesJS
    Utils.registerParticles();

  }
  render(){
    return (
      <div>
        <Header />
        <Aboutus />
        <Masonry />
      </div>
    );
  }
}

export default Layout;
