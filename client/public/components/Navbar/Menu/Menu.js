import React, { Component } from 'react';
import css from './Menu.css';
import classNames from 'classnames';
import { Link } from 'react-router-dom';


let socialList;
class Menu extends Component {
  constructor(props){
    super(props);
    this.state = {
      socials: [
        {
          href: 'https://www.facebook.com/Netglitch-639632836220315/',
          src: '../../../src/images/facebook.png'
        },
        {
          href: 'https://www.instagram.com/netglitch/',
          src: '../../../src/images/instagram.png'
        },
        {
          href: '#second',
          src: '../../../src/images/twitter.png'
        },
        {
          href: '#',
          src: '../../../src/images/linkedin.png'
        }
      ]
    }
  }

  toggleMenu() {
    this.props.redirect(false);
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
    <section className="hero is-fullheight" id="burgerMenu">
      <div className="hero-body">
       <div className="container">
         <nav className="level">
           <div className="level-left">
            <div className="level-item has-text-left socials-level">
              {socialList}
            </div>
          </div>

          <div className="level-item has-text-centered">

          </div>

          <div className="level-right">
            <div className="level-item has-text-right">
              <ul className="menu-list">
                <li>
                  <Link className="blue" to='/webdesign' onClick={this.toggleMenu.bind(this)}>
                    WebDesign
                  </Link>
                </li>
                <li>
                  <a className="blue" href="#second" onClick={this.toggleMenu.bind(this)}>
                    What we do
                  </a>
                </li>
                <li>
                  <a className="blue" href="#third" onClick={this.toggleMenu.bind(this)}>
                    Services
                  </a>
                </li>
                <li>
                  <a className="blue" href="#sixth" onClick={this.toggleMenu.bind(this)}>
                    Hire Us
                  </a>
                </li>
                <li>
                  <a className="blue" href="#seventh" onClick={this.toggleMenu.bind(this)}>
                    Contact US
                  </a>
                </li>
              </ul>
            </div>
          </div>

        </nav>
       </div>
      </div>
    </section>
    );
  }
}

export default Menu;
