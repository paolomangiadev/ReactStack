import React, { Component } from 'react';
import css from './Menu.css';
import classNames from 'classnames';
// import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';


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
                  <Link className="blue" to='/services/WebDesign' onClick={this.toggleMenu.bind(this)}>
                    WebDesign
                  </Link>
                </li>
                <li>
                  <Link className="blue" to="/#second" onClick={this.toggleMenu.bind(this)}>
                    What we do
                  </Link>
                </li>
                <li>
                  <Link className="blue" to="/#third" onClick={this.toggleMenu.bind(this)}>
                    Services
                  </Link>
                </li>
                <li>
                  <Link className="blue" to="/#sixth" onClick={this.toggleMenu.bind(this)}>
                    Hire Us
                  </Link>
                </li>
                <li>
                  <Link className="blue" to="#seventh" onClick={this.toggleMenu.bind(this)}>
                    Contact US
                  </Link>
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
