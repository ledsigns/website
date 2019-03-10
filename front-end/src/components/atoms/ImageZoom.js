import React, { Component } from "react";
import ReactImageMagnify from "react-image-magnify";

export default class ImageZoom extends Component {
  render() {
    return (
      <div>
        <ReactImageMagnify
          {...{
            smallImage: {
              alt: "Wristwatch by Ted Baker London",
              isFluidWidth: true,
              src:
                "https://images.pexels.com/photos/257840/pexels-photo-257840.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            },
            largeImage: {
              src:
                "https://images.pexels.com/photos/257840/pexels-photo-257840.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
              width: 1200,
              height: 1800
            }
          }}
        />
      </div>
    );
  }
}
