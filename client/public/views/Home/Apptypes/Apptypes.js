import React, { Component } from 'react';
import css from './Apptypes.css';
import _ from 'lodash';

let apptypesList1;
let apptypesList2;

import webappIMG from "../../../src/images/webapp.png";
import mobileappIMG from "../../../src/images/mobileapp.png";

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
          href: "dfgdfg"
        },
        {
          src: mobileappIMG,
          title: "Mobile App",
          description: "Smartphone and Tablet app",
          link_txt: "Get a Quote",
          href: "sfgdsg"
        }
      ]
    }
  }
  render(){
    if (this.state.line1) {
      apptypesList1 = _.map(this.state.line1, function(item) {
        return (
          <a className="column anchor-wrap" href={item.href} key={item.title}>
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
          </a>
        );
      });
    }

    return (
      <div id="sixth" className="is-fullwidth is-background">
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
