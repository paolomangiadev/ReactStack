import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import particles from '../../external-libraries/particles/particles.min.js';
import smoothScroll from '../../external-libraries/smoothscroll/smooth-scroll.min.js';
import axios from 'axios';
import bulma from 'bulma/css/bulma.css';
import css from './Home.css';
import Utils from '../../utils/Utils';
import Header from '../../components/Header';
import Aboutus from './Aboutus';
import Masonry from './Masonry';
import Quotes from './Quotes';
import LetUsKnow from './LetUsKnow';
import Apptypes from './Apptypes';
import Footer from '../../components/Footer';

let html = document.getElementsByTagName( 'html' )[0];

class Home extends Component {

  constructor(props){
    super(props);
    this.state = {
      back2Top: false
    }
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {

    //check window scroll
    window.addEventListener('scroll', this.handleScroll);

    //init of WOWJS
    const wow = Utils.registerWOW();
    wow.init();

    //init of particlesJS
    Utils.registerParticles();

    //init of smooth-scroll
    smoothScroll.init({
      speed: 700, // Integer. How fast to complete the scroll in milliseconds
      offset: 0, // Integer or Function returning an integer. How far to offset the scrolling anchor location in pixels
      easing: 'Linear',
      before: function (anchor, toggle) {
        html.classList.remove("noscroll");
      }
    });
  }

  componentWillUnmount () {
      window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll (event) {
      let scrollTop = event.srcElement ? event.srcElement.body.scrollTop : event.pageY;
      if (scrollTop > 450) {
        this.setState({back2Top: true});
      }
      else {
        this.setState({back2Top: false});
      }
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
        <a data-scroll href="#first" className={classNames('toTopAnchor', {back2Top: this.state.back2Top})}>
          <img src="../src/images/arrowup.png" />
        </a>
      </div>
    );
  }
}

export default Home;
