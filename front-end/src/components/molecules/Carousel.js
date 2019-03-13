import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "../styles/molecules/HomeCarousel.scss";

export default class ControlledCarousel extends Component {
  render() {
    return (
      <div>
        <Carousel
          showStatus={false}
          infiniteLoop={true}
          showThumbs={this.props.showThumbs}
          showArrows={true}
          autoPlay={true}
          interval={4000}
        >
          {this.props.elements.map((element, index) => (
            <div key={index} className="carousel-element">
              <img
                style={this.props.customStyles}
                alt="283409"
                src={element.img}
              />
            </div>
          ))}
        </Carousel>
      </div>
    );
  }
}
