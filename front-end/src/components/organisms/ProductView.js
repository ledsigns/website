import React, { Component } from "react";
import ReactImageMagnify from "react-image-magnify";
import ReactSlick from "react-slick";

export default class Product extends Component {
  render() {
    console.log("this.props.productDetail");
    console.log(this.props.productDetail);
    const details = this.props.productDetail;
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexDirection: "row",
            width: "100%"
          }}
        >
          <div style={{ width: "40%" }}>
            {/* <Carousel
              customStyles={
                {
                  // height: "300px",
                  // width: "200px",
                  // objectFit: "contain"
                  // overflow: "hidden"
                }
              }
              elements={}
            /> */}
            <ReactSlick
              {...{
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1
              }}
            >
              {details.productDetail.images.map((src, index) => (
                <div key={index}>
                  <ReactImageMagnify
                    {...{
                      smallImage: {
                        alt: "Wristwatch by Versace",
                        isFluidWidth: true,
                        src: src.link
                      },
                      largeImage: {
                        src: src.link,
                        width: 1000,
                        height: 1000
                      },
                      lensStyle: { backgroundColor: "rgba(0,0,0,0)" }
                    }}
                  />
                </div>
              ))}
            </ReactSlick>
          </div>
          <div style={{ marginLeft: "30px", width: "40%" }}>
            <h2>{details.name}</h2>
          </div>
        </div>
      </div>
    );
  }
}
