import React, { Component } from 'react';
import css from './LetUsKnow.css';
import axios from 'axios';
import _ from 'lodash';

class Quotes extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  componentDidMount() {

  }
  componentWillUnmount(){

  }

  render(){
    return (
      <div id="letusknow" className="is-fullwidth is-letusknow">
        <section className="hero is-medium has-text-centered">
          <div className="hero-body">
            <div className="container">
              <h1 data-wow-duration="0.7s" className="wow fadeInDown title letusknow_title">
                LET US KNOW ABOUT YOUR PROJECT!
              </h1>
              <p data-wow-duration="0.7s" className="wow fadeInUp subtitle letusknow_subtitle">
                Whether you'd like to build a Web or Mobile application we bring your ideas to life
                in a short amount of time deploying a fast a intuitive user experience with the help
                of the latest technologies around.
              </p>
            </div>
          </div>
        </section>
        <section className="hero">
          <div className="hero-body has-text-centered">
            <div className="container">
              <h1 data-wow-duration="0.7s" className="wow fadeIn title">
                What would you like to create?
              </h1>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Quotes;
