import React, { Component } from 'react';
import css from './Apptypes.css';
import _ from 'lodash';
import { HashLink as Link } from 'react-router-hash-link';

let apptypesList1;
let apptypesList2;

import webappIMG from "../../../src/images/webapp.jpeg";
import mobileappIMG from "../../../src/images/mobileapp.jpeg";

class Apptypes extends Component {
  componentDidMount() {
  }
  constructor(props){
    super(props);
    this.state = {
      line1: [
        {
          src: webappIMG,
          title: "Web App",
          description: "Desktop or WebApp",
          link_txt: "Get a Quote",
          href: "/get-a-quote"
        },
        {
          src: mobileappIMG,
          title: "Mobile App",
          description: "Smartphone and Tablet app",
          link_txt: "Get a Quote",
          href: "/get-a-quote"
        }
      ]
    }
  }
  render(){
    if (this.state.line1) {
      apptypesList1 = _.map(this.state.line1, function(item) {
        return (
          <Link className="column anchor-wrap" to={item.href} key={item.title}>
            <div className="wrapper_noLine">
              <div className="single-apptypes" style={{background: `url(${item.src})`}}></div>
              <div className="text-apptypes">
                <h2 className="title">{item.title}</h2>
                <p className="description_apptypes">{item.description}</p>
                <div className="item button is-danger is-inverted is-outlined button_apptypes">
                  {item.link_txt}
                </div>
              </div>
            </div>
          </Link>
        );
      });
    }

    return (
      <div id="apptypes" className="is-fullwidth is-background">
        <section className="hero is-fullheight Apptypes">
          <div data-wow-duration="1.5s" className="wow fadeIn columns is-gapless">
            {apptypesList1}
          </div>
        </section>
      </div>
    );
  }
}

export default Apptypes;
