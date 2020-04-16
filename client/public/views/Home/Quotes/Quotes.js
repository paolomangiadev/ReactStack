import React, { Component } from 'react';
import css from './Quotes.css';
import axios from 'axios';
import ReactHtmlParser from 'react-html-parser';
import _ from 'lodash';
import { timer } from 'rxjs';

let quote = {};
let isMounted = false;

class Quotes extends Component {
  timer = null;
  constructor(props) {
    super(props);
    this.state = {
      quote: quote,
    }
  }

  decodeEntities (str) {
    // this prevents any overhead from creating the object each time
    const element = document.createElement('div');
    if (str && typeof str === 'string') {
      // strip script/html tags
      element.innerHTML = str;
      str = element.textContent;
      element.textContent = '';
      return str;
    } else {
      console.log('yo not a string')
    }
  }

  getQuote () {
    axios.get('https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand&callback=' + new Date().getTime())
      .then((response) => {
        const data = {
          content: this.decodeEntities(response.data[0].content.rendered || response.data[0].content),
          title: this.decodeEntities(response.data[0].title.rendered || response.data[0].title)
        };
        if (data.content.length < 200) {
          this.setState({ quote: data });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  componentDidMount () {
    isMounted = timer(0, 5000).subscribe(() => {
      this.getQuote()
    });
  }
  componentWillUnmount () {
    isMounted.unsubscribe();
  }

  render () {
    return (
      <div id="fourth" className="is-fullwidth is-quotes" onClick={this.getQuote.bind(this)}>
        <section className="hero is-fullheight quotes">
          <div className="hero-body">
            <div data-wow-duration="0.7s" className="wow fadeIn container has-text-centered">
              <h1 className="title">
                Quotes We Love
              </h1>
              <div className="quotes_container">
                <div className="quote_text">
                  <p>{ReactHtmlParser(this.state.quote.content)} </p>
                </div>
                <span className="quote_author">
                  - {this.state.quote.title} -
                </span>
              </div>
            </div>
          </div>
          <div className="apiby">
            <span className="white">API by </span>
            <a href="https://quotesondesign.com" target="_blank" className="blue">
              quotesondesign.com
            </a>
          </div>
        </section>
      </div>
    );
  }
}

export default Quotes;
