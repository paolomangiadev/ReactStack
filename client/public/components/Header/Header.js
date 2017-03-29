import React, { Component } from 'react';
import css from './Header.css';

class Header extends Component {
  componentDidMount() {
  }
  render(){
    return (
        <div className="is-fullwidth">
        <section className="hero is-success is-fullheight">
          <div className="hero-body">
            <div className="container">
              <p className="title">
                Hi from Header!
              </p>
              <p className="subtitle">
                Hello from React!
              </p>
              <div className="wow fadeInUp" data-wow-duration="0.5s">
                <a className="button is-success is-inverted is-outlined">Invert Outlined</a>
              </div>
            </div>
          </div>
        </section>
        <section className="hero is-danger is-fullheight">
          <div className="hero-body">
            <div className="container">
              <p className="title">
                Hi from Header!
              </p>
              <p className="subtitle">
                Hello from React!
              </p>
              <div className="wow fadeInUp" data-wow-duration="0.5s">
                <a className="button is-danger is-inverted is-outlined">Invert Outlined</a>
              </div>
            </div>
          </div>
        </section>
        </div>
    );
  }
}

export default Header;
