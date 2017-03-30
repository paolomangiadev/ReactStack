import React, { Component } from 'react';
import css from './Header.css';
import Navbar from './Navbar';

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
            <h1 className="title">
              Title
            </h1>
            <h2 className="subtitle">
              Subtitle
            </h2>
          </div>
        </div>
      </section>
    </div>
    );
  }
}

export default Header;
