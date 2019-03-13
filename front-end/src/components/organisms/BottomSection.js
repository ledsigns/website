import React, { Component } from "react";
import "../styles/organisms/BottomSection.scss";
import Slider from "../atoms/clientSlider";
const MyStatelessComponent = props => (
  <>
    <div className="bottom-section">
      <div className="items">
        <div className="item">
          <bold>
            <h5>Home</h5>
          </bold>
        </div>
        <div className="item">
          <bold>
            <h5>Products</h5>
          </bold>
          {props.categoryData ? (
            <>
              {props.categoryData.map(category => (
                <a href={`/category/${category._id}`}>
                  <p>{category.caption}</p>
                </a>
              ))}
            </>
          ) : (
            false
          )}
        </div>
        <div className="item">
          <bold>
            <h5>Case Study</h5>
          </bold>
          <p />
        </div>
        <div className="item">
          <bold>
            <h5>Solution</h5>
          </bold>
          <p />
        </div>
        <div className="item">
          <bold>
            <h5>About Us</h5>
          </bold>
          <p />
        </div>
        <div className="item">
          <bold>
            <h5>News</h5>
          </bold>
          <p />
        </div>
        <div className="item">
          <bold>
            <h5>Contact Us</h5>
          </bold>
          <p />
        </div>
      </div>

      <div className="slider">
        <h5>Our Clients</h5>
        <Slider />
      </div>
    </div>
  </>
);

export default MyStatelessComponent;
