import Slider from "react-slick";
import React, { Component } from "react";

export default class App extends Component {
  render() {
    var settings = {
      infinite: true,
      speed: 400,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    this.slider.slickGoTo(this.props.index);
    return (
      <div>
        <Slider ref={slider => (this.slider = slider)} {...settings}>
          <div>
            <div>
              <h2>hai</h2>
            </div>
          </div>
          <div>
            <div>
              <h2>hai</h2>
            </div>
          </div>
          <div>
            <div>
              <h2>hai</h2>
            </div>
          </div>
        </Slider>
        <h1>{this.props.index}</h1>
        <button onClick={e => this.slider.slickGoTo(2)}>slickGoTo</button>
      </div>
    );
  }
}
