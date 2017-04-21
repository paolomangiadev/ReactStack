import React, { Component } from 'react';
import css from './Quotes.css';
import axios from 'axios';
import ReactHtmlParser from 'react-html-parser';
import _ from 'lodash';

let quote = {};
let isMounted;

class Quotes extends Component {
  constructor(props){
    super(props);
    this.state = {
      quote: quote
    }
  }

  startPolling () {
    var self = this;
    setTimeout(function() {
      if (!isMounted) { return; } // abandon
      self.poll(); // do it once and then start it up ...
      self._timer = setInterval(self.poll.bind(self), 13000);
    }, 10);
  }

  decodeEntities(str) {
  // this prevents any overhead from creating the object each time
    var element = document.createElement('div');
    if(str && typeof str === 'string') {
      // strip script/html tags
      element.innerHTML = str;
      str = element.textContent;
      element.textContent = '';
    }
    return str;
  }

  poll () {
    var self = this;
    axios.get('http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&callback=' + new Date().getTime())
    .then((response) => {
      var data = response.data[0];
      data.content = this.decodeEntities(response.data[0].content);
      data.title = this.decodeEntities(response.data[0].title);
      if (data.content.length < 200) {
        this.setState({quote: data});
      }
      else {
        console.log('too long');
        this.poll();
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  componentDidMount() {
    this.startPolling();
    isMounted = true;
  }
  componentWillUnmount(){
    isMounted = false;
  }

  render(){
    return (
      <div id="fourth" className="is-fullwidth is-quotes" onClick={this.poll.bind(this)}>
        <section className="hero is-fullheight quotes">
          <div className="hero-body">
            <div data-wow-duration="0.7s" className="wow fadeIn container has-text-centered">
              <h1 className="title">
                Quotes We Love
              </h1>
              <div className="quotes_container">
                <div className="quote_text">
                  <p>{ ReactHtmlParser(this.state.quote.content) } </p>
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
