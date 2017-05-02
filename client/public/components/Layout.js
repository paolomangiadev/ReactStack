import React, { Component } from 'react';
import bulma from 'bulma/css/bulma.css';
import FontAwesome from 'font-awesome/css/font-awesome.min.css';
import particles from '../external-libraries/particles/particles.min.js';
import smoothScroll from '../external-libraries/smoothscroll/smooth-scroll.min.js';
import axios from 'axios';
import css from './Layout.css';
import Utils from '../utils/Utils';
import Header from './Header';
import Aboutus from './Aboutus';
import Masonry from './Masonry';
import Quotes from './Quotes';
import LetUsKnow from './LetUsKnow';
import Apptypes from './Apptypes';
import Footer from './Footer';
import '../fonts/lato/lato.scss';
import '../fonts/OpenSans/OpenSans.scss';

let html = document.getElementsByTagName( 'html' )[0];
class Layout extends Component {
  componentDidMount() {
    //init of WOWJS
    const wow = Utils.registerWOW();
    wow.init();

    //init of particlesJS
    Utils.registerParticles();

    //init of smooth-scroll
    smoothScroll.init({
      speed: 1800, // Integer. How fast to complete the scroll in milliseconds
      offset: 0, // Integer or Function returning an integer. How far to offset the scrolling anchor location in pixels
      easing: 'easeOutQuad',
      before: function (anchor, toggle) {
        html.classList.remove("noscroll");
      }
    });

  }
  render(){
    return (
      <div>
        <Header />
        <Aboutus />
        <Masonry />
        <Quotes />
        <LetUsKnow />
        <Apptypes />
        <Footer />
      </div>
    );
  }
}

export default Layout;
