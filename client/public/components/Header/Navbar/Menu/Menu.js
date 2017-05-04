import React, { Component } from 'react';
import css from './Menu.css';
import classNames from 'classnames';

class Menu extends Component {
  constructor(props){
    super(props);
  }

  toggleMenu() {
    this.props.onUpdate(true);
  }

  componentDidMount() {

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
