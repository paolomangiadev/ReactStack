import React, { Component } from 'react';
import css from './Header.css';
import Navbar from './Navbar';
const brand = '../../src/images/netglitch.svg';
const line = '../../src/images/line.png';

class Header extends Component {
  componentDidMount() {
  }
  render(){
    return (
    <div className="is-fullwidth is-background">
      <section className="hero trasparent is-medium is-fullheight">
        <Navbar />

        <div className="hero-body">
          <div className="container has-text-centered">
            <div data-wow-duration="0.6s" className="wow fadeInDown we-are">
              <div className="line line_pre"><img src={line}/></div>
                <span>We are</span>
              <div className="line line_post"><img src={line}/></div>
            </div>
            <span data-wow-duration="0.6s" className="wow fadeIn title brand">
              <img src={brand}/>
            </span>
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
          </div>
        </div>

      </section>
    </div>
    );
  }
}

export default Header;
