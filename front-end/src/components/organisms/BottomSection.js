import React, { Component } from "react";
import "../styles/organisms/BottomSection.scss";
const MyStatelessComponent = props => (
  <>
    <div className="bottom-section">
      <div className="items">
        <div className="item">
          <bold>
            <h5>Home</h5>
          </bold>
          <br />
          <p>Lorem</p>
          <p>Ipsum</p>
          <p>Lorem</p>
        </div>
        <div className="item">
          <bold>
            <h5>Products</h5>
          </bold>
          <p />
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
    </div>
  </>
);

export default MyStatelessComponent;
