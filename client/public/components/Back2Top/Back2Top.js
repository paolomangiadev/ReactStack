import React, { Component } from 'react';
import css from './Back2Top.css';
import ReactHtmlParser from 'react-html-parser';
import smoothScroll from '../../external-libraries/smoothscroll/smooth-scroll.min.js';
import classNames from 'classnames';

import back2Top_icon from "../../src/images/arrowup.png";

let html = document.getElementsByTagName( 'html' )[0];

class Back2Top extends Component {
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
    //init of smooth-scroll
    smoothScroll.init({
      speed: 700, // Integer. How fast to complete the scroll in milliseconds
      offset: 0, // Integer or Function returning an integer. How far to offset the scrolling anchor location in pixels
      easing: 'easeOutCubic',
      before: function (anchor, toggle) {
        html.classList.remove("noscroll");
      }
    });
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

  scrolltoTop(){
    smoothScroll.animateScroll(0);
  }

  render(){
    return (
      <div>
        <a onClick={this.scrolltoTop} className={classNames('toTopAnchor', {back2Top: this.state.back2Top})}>
          <img src={back2Top_icon} />
        </a>
      </div>
    );
  }
}

export default Back2Top;
