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
        {
          href: 'https://www.facebook.com/Netglitch-639632836220315/',
          src: '../../src/images/facebook.png'
        },
        {
          href: 'https://www.instagram.com/netglitch/',
          src: '../../src/images/instagram.png'
        },
        {
          href: '#', src: '../../src/images/twitter.png'
        },
        {
          href: '#',
          src: '../../src/images/linkedin.png'
        }
      ]
    }
  }
  render(){
    if (this.state.socials) {
      socialList = _.map(this.state.socials, function(item) {
        return (
          <a href={item.href} key={item.src}>
          <div className="column socials"><img src={item.src}/></div>
          </a>
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
            <div data-wow-duration="0.7s" className="wow fadeInDown we-are">
              <div className="line line_pre"><img src={line}/></div>
                <span>We are</span>
              <div className="line line_post"><img src={line}/></div>
            </div>
            <span data-wow-duration="0.7s" className="wow fadeIn title brand">
              <img src={brand}/>
            </span>
            {/* END OF TITLE SECTION */}

            {/* GET A QUOTE */}
            <div className="subtitle">
              <div data-wow-duration="0.7s" className="wow fadeInUp get-quote">
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
                <div data-wow-duration="3s" className="wow fadeIn columns social_wrapper">
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
