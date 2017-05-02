import React, { Component } from 'react';
import css from './Menu.css';
import classNames from 'classnames';

class Menu extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
    <section className="hero is-fullheight" id="burgerMenu">
      <div className="hero-body">
       <div className="container">
         <nav className="level">
           <div className="level-left">
            <div className="level-item has-text-left socials-level">
              {this.props.socials}
            </div>
          </div>

          <div className="level-item has-text-centered">

          </div>

          <div className="level-right">
            <div className="level-item has-text-right">
              <ul className="menu-list">
                <li>
                  <a className="blue" data-scroll href="#second">
                    What we do
                  </a>
                </li>
                <li>
                  <a className="blue" data-scroll href="#third">
                    Services
                  </a>
                </li>
                <li>
                  <a className="blue" data-scroll href="#sixth">
                    Hire Us
                  </a>
                </li>
                <li>
                  <a className="blue" data-scroll href="#seventh">
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
