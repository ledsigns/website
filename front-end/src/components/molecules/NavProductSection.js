import React, { Component } from "react";
import "../styles/molecules/NavProductSection.scss";
import Element from "./NavProductSectionElement.js";

export default class NavProductSection extends Component {
  state = {
    selectedIndex: 0,
    selectedImg:
      "https://s3-ap-southeast-1.amazonaws.com/ledsignstestimg/product/LEDMAN+COB+Display/20180820044507_391976.jpg"
  };

  async componentDidMount() {}

  mapElement(start, end) {
    let table = [];

    for (let i = start; i < end; i++) {
      table.push(
        <Element
          caption={this.props.productData[i].caption}
          onHoverSub={this.onHoverSub.bind(this)}
          imgPath={this.props.productData[i].imgPath}
        />
      );
    }
    return table;
  }

  renderSwitch(param) {
    switch (param) {
      case 0:
        return <>{this.mapElement(0, 4)}</>;
      case 1:
        return <>{this.mapElement(4, 8)}</>;
      case 2:
        return <>{this.mapElement(8, 12)}</>;
      case 3:
        return <>{this.mapElement(12, 16)}</>;
      default:
        return "foo";
    }
  }

  onHoverMain(index) {
    this.setState({
      selectedIndex: index
    });
  }

  onHoverSub(url) {
    this.setState({
      selectedImg: url
    });
  }

  render() {
    return (
      <>
        <div className="navbar-section">
          {this.props.categoryData && this.props.productData ? (
            <>
              <div className="category1">
                <div
                  className="box"
                  onMouseEnter={() => this.onHoverMain(0)}
                  onMouseEnter={() =>
                    this.onHoverSub(this.props.categoryData[0].imgPath)
                  }
                >
                  <p>{this.props.categoryData[0].caption}</p>
                </div>
                <div
                  className="box"
                  onMouseEnter={() => this.onHoverMain(1)}
                  onMouseEnter={() =>
                    this.onHoverSub(this.props.categoryData[1].imgPath)
                  }
                >
                  <p>{this.props.categoryData[1].caption}</p>
                </div>
                <div
                  className="box"
                  onMouseEnter={() => this.onHoverMain(2)}
                  onMouseEnter={() =>
                    this.onHoverSub(this.props.categoryData[2].imgPath)
                  }
                >
                  <p>{this.props.categoryData[2].caption}</p>
                </div>
                <div
                  className="box"
                  onMouseEnter={() => this.onHoverMain(3)}
                  onMouseEnter={() =>
                    this.onHoverSub(this.props.categoryData[3].imgPath)
                  }
                >
                  <p>{this.props.categoryData[3].caption}</p>
                </div>
              </div>
              <div className="category2">
                {this.renderSwitch(this.state.selectedIndex)}
              </div>
              <div className="image">
                <img src={this.state.selectedImg} alt="" />
              </div>
            </>
          ) : (
            false
          )}
        </div>
      </>
    );
  }
}
