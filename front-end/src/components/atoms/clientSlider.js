import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function importAll(r) {
  return r.keys().map(r);
}

var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 9,
  slidesToScroll: 1,
  autoplay: true
};
export default class clientSlider extends Component {
  render() {
    const images = importAll(
      require.context("../../assets/client-logos", false, /\.(png|jpe?g|svg)$/)
    );

    return (
      <div style={{ height: "100px", width: "80%" }}>
        <Slider {...settings}>
          {images.map(image => (
            <div
              style={{
                display: "flex",
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
                height: "100%"
              }}
            >
              <div
                style={{
                  display: "flex",
                  textAlign: "center",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                  width: "100%"
                }}
              >
                <div
                  style={{
                    height: "100px",
                    width: "100px",
                    backgroundImage: `url(${image})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center center",
                    backgroundSize: "contain"
                  }}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
