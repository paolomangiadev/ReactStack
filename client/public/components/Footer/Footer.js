import React, { Component } from 'react';
import css from './Footer.css';
import axios from 'axios';
import ReactHtmlParser from 'react-html-parser';
import _ from 'lodash';

let socialList;
const brand = '../../src/images/netglitch.png';

class Footer extends Component {
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
          href: '#second', src: '../../src/images/twitter.png'
        },
        {
          href: '#',
          src: '../../src/images/linkedin.png'
        }
      ]
    }
  }

  componentDidMount() {
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
      <div id="seventh" className="is-fullwidth is-footer">
        <section className="hero is-medium footer">
          <div className="hero-body">
            <div className="container">
              <div className="columns">
                <div className="column first_col-footer">
                  <h2 className="title">Contacts</h2>
                  <div className="title_divider"></div>
                  <p className="footer_description subtitle">
                    We're currently taking on new projects.
                    <br></br>
                    Would you like to discuss yours?
                  </p>
                  <div className="footer_contacts">
                    <div className="columns">
                      <div className="column is-1">
                        <span className="icon">
                          <i className="fa fa-phone"></i>
                        </span>
                      </div>
                      <div className="column is-11">
                        <a href="#">
                        <p className="blue">+39 3382097290</p>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="footer_contacts">
                    <div className="columns">
                      <div className="column is-1">
                        <span className="icon">
                          <i className="fa fa-envelope-o"></i>
                        </span>
                      </div>
                      <div className="column is-11">
                        <a href="mailto:netglitch.dev@email.com">
                        <p className="blue">netglitch.dev@gmail.com</p>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="footer_contacts">
                    <div className="columns">
                      <div className="column is-1">
                        <span className="icon">
                          <i className="fa fa-map-marker" aria-hidden="true"></i>
                        </span>
                      </div>
                      <div className="column is-11">
                        <p className="blue">Milan, Italy</p>
                      </div>
                    </div>
                  </div>

                </div>

                <div className="column second_col-footer">
                  <div data-wow-duration="1.5s" className="wow fadeIn columns social_wrapper">
                    {socialList}
                  </div>
                </div>

                <div className="column third_col-footer">
                  <h2 className="title">Hire Us</h2>
                  <div className="title_divider"></div>
                  <div className="item button is-danger is-inverted is-outlined button_footer">
                    Get a Quote
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div className="hero-foot">
            <div className="container">
            <nav className="level">
              <div className="level-left">
                <div className="level-item footer_brand">
                  <img src={brand}/>
                </div>
              </div>

              <div className="level-right">
                <div className="level-item">
                  <p className="subtitle is-5">
                    Copyright <b>netglitch</b> 2017 | All Rights Reserved
                  </p>
                </div>
              </div>

            </nav>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Footer;
