import React, { Component } from "react";
import "../styles/organisms/BottomSection.scss";
// import Slider from "../atoms/clientSlider";
const MyStatelessComponent = props => (
  <>
    <div className="bottom-section">
      <div className="items">
        <div className="item">
          <bold>
            <a href="/" style={{ color: 'black' }}>
              <h5>Home</h5>
            </a>
          </bold>
        </div>
        <div className="item">
          <bold>
            <h5>Products</h5>
          </bold>
          {props.categoryData ? (
            <div style={{ paddingTop: '20px' }}>
              {props.categoryData.map(category => (
                <>
                  {console.log(`passed Id at bottom ` + JSON.stringify(category))}
                  < a style={{ color: 'black' }} href={`/productByCategory/${category.id}`}>
                    <p>{category.caption}</p>
                  </a>
                </>
              ))}
            </div>
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

      {/* <div className="slider">
        <h3>Our clients</h3>
        <p>________</p>
        <Slider />
      </div> */}
    </div>
  </>
);

export default MyStatelessComponent;
