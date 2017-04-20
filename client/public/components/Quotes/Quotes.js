import React, { Component } from 'react';
import css from './Quotes.css';
import axios from 'axios';

axios.get('http://quotesondesign.com/wp-json/posts?filter[orderby]=rand')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

class Quotes extends Component {
  componentDidMount() {
  }
  render(){
    return (
      <div id="fourth" className="is-fullwidth is-quotes">
        <section className="hero is-fullheight quotes">
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title">
                Quotes We Love
              </h1>
              <div className="quotes_container">
                <p className="quote_text">
                  We ourselves feel that what we are doing is
                  just a drop in the ocean. But the ocean
                  would be less because of that missing drop.
                </p>
                <span className="quote_author">
                  - Mother Teresa -
                </span>
              </div>
            </div>
          </div>
          <div className="apiby">
            <span className="white">API by </span>
            <span className="blue">
              quotesdesign.com
            </span>
          </div>
        </section>
      </div>
    );
  }
}

export default Quotes;
