import React, { Component } from 'react';
import css from './Masonry.css';
import _ from 'lodash';

let masonryList1;
let masonryList2;

class Masonry extends Component {
  componentDidMount() {
  }
  constructor(props){
    super(props);
    this.state = {
      line1: [
        {
          src: "../../src/images/item-1.png",
          title: "Web Design",
          description: ""
        },
        {
          src: "../../src/images/item-2.png",
          title: "Graphic Design",
          description: ""
        },
        {
          src: "../../src/images/item-3.png",
          title: "Team Members",
          description: ""
        }
      ],
      line2: [
        {
          src: "../../src/images/item-4.png",
          title: "Technologies",
          description: ""
        },
        {
          src: "../../src/images/item-5.png",
          title: "Social Medias",
          description: ""
        }
      ]
    }
  }
  render(){
    if (this.state.line1) {
      masonryList1 = _.map(this.state.line1, function(item) {
        return (
          <a className="column anchor-wrap" href={item.href} key={item.title}>
          <div className="single-masonry" style={{backgroundImage: `url(${item.src})`}}></div>
          </a>
        );
      });
    }

    if (this.state.line2) {
      masonryList2 = _.map(this.state.line2, function(item) {
        return (
          <a className="column anchor-wrap" href={item.href} key={item.title}>
          <div className="single-masonry" style={{backgroundImage: `url(${item.src})`}}></div>
          </a>
        );
      });
    }


    return (
      <div id="third" className="is-fullwidth is-background">
        <section className="hero is-fullheight Masonry">
          <div data-wow-duration="1.5s" className="wow fadeIn columns is-gapless">
            {masonryList1}
          </div>
          <div data-wow-duration="1.5s" className="wow fadeIn columns is-gapless">
            {masonryList2}
          </div>
        </section>
      </div>
    );
  }
}

export default Masonry;
