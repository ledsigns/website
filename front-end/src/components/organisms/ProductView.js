import React, { Component } from "react";
import Carousel from "../molecules/Carousel";

const elements = [
  {
    img:
      "https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    src:
      "https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    img:
      "https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    src:
      "https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  }
];
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
            <Carousel
              customStyles={
                {
                  // height: "300px",
                  // width: "200px",
                  // objectFit: "contain"
                  // overflow: "hidden"
                }
              }
              elements={details.productDetail.images.map(element => ({
                img: element.link,
                src: element.link
              }))}
            />
          </div>
          <div style={{ marginLeft: "30px", width: "40%" }}>
            <h2>{details.name}</h2>
          </div>
        </div>
      </div>
    );
  }
}
