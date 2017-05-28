import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import particles from '../../external-libraries/particles/particles.min.js';
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
  }

  componentDidMount() {
    //init of Plugins
    Utils.registerPlugins();
  }

  componentWillUnmount () {
      window.removeEventListener('scroll', this.handleScroll);
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
      </div>
    );
  }
}

export default Home;
