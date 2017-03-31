import React, { Component } from 'react';
import css from './Header.css';
import Navbar from './Navbar';
import _ from 'lodash';

const brand = '../../src/images/netglitch.svg';
const line = '../../src/images/line.png';
let socialList;

class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      socials: [
        {src: '../../src/images/facebook.png'},
        {src: '../../src/images/instagram.png'},
        {src: '../../src/images/twitter.png'},
        {src: '../../src/images/linkedin.png'}
      ]
    }
  }
  render(){
    if (this.state.socials) {
      socialList = this.state.socials.map(function(item) {
        return (
          <div key={item.src} className="column"><img src={item.src}/></div>
        );
      });
    }


    return (
    <div className="is-fullwidth is-background">
      <section className="hero trasparent is-medium is-fullheight">
        <Navbar />
        {/* HERO */}
        <div className="hero-body">

          {/* HERO CONTAINER  */}
          <div className="container has-text-centered">

            {/* TITLE SECTION */}
            <div data-wow-duration="0.6s" className="wow fadeInDown we-are">
              <div className="line line_pre"><img src={line}/></div>
                <span>We are</span>
              <div className="line line_post"><img src={line}/></div>
            </div>
            <span data-wow-duration="0.6s" className="wow fadeIn title brand">
              <img src={brand}/>
            </span>
            {/* END OF TITLE SECTION */}

            {/* GET A QUOTE */}
            <div className="subtitle">
              <div data-wow-duration="0.6s" className="wow fadeInUp get-quote">
                <div className="get-quote_wrapper left_wrapper">
                  <a className="item item_left">Services</a>
                  <div className="item item_line item_line_left"></div>
                  <a className="item button is-danger is-inverted is-outlined">
                    Get a Quote
                  </a>
                  <div className="item item_line item_line_right"></div>
                  <a className="item item_right">Jobs</a>
                </div>
              </div>
            </div>
            {/* END OF GET A QUOTE */}

            {/* SOCIALS */}
                <div className="columns">
                  {socialList}
                </div>
            {/* END OF SOCIALS */}


          </div>
          {/* END OF HERO CONTAINER */}
        </div>
        {/* END OF HERO */}

      </section>
    </div>
    );
  }
}

export default Header;
