import React, { Component } from 'react';
import css from './Aboutus.css';
const typography = '../../src/images/what-we-do.svg';

class Aboutus extends Component {
  componentDidMount() {
  }
  render(){
    return (
    <div id="second" className="is-fullwidth">
      <section className="hero is-fullheight aboutUs">
        <div className="hero-body">
          <div className="container">
            <div className="title title_typography">
              <div className="typography_wrapper">
                <img data-wow-duration="0.7s" className="wow fadeIn typography" src={typography}/>
              </div>
              <div className="description">
                <div className="description_center">
                <span>WE DEVELOP SOFTWARE</span>
                  <div className="description_wrapper">
                  <div className="description_line"></div>
                  <p>
                   We are a team of programmers who loves taking challenges and delivering the
                   best user experience and design around.
                  </p>
                  <p>
                    We are specialized in custom Web/Mobile applications
                    and social media hacking. We belive in our client's esponential growth
                    and we feel fulfilled by your achievements.
                  </p>
                  </div>
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

export default Aboutus;
