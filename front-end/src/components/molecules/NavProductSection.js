import React, { Component } from "react";
import "../styles/molecules/NavProductSection.scss";

export default class NavProductSection extends Component {
  state = {
    selectedIndex: 0,
    selectedImg:
      "https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  };

  async componentDidMount() {
    console.log(`passed props ` + JSON.stringify(this.props.categoryData))
    console.log(`passed props ` + JSON.stringify(this.props.productData))
  }

  renderSwitch(param) {
    switch (param) {
      case 0:
        return (
          <>
            <div
              className="box"
              onMouseEnter={() =>
                this.onHoverSub(
                  "https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                )
              }
            >
              <p>Category 1 Subcategory 1</p>
            </div>
            <div
              className="box"
              onMouseEnter={() =>
                this.onHoverSub(
                  this.props.productData[0].imgPath
                )
              }
            >
              <p>Category 1 Subcategory 2</p>
            </div>
            <div
              className="box"
              onMouseEnter={() =>
                this.onHoverSub(
                  this.props.productData[4].imgPath
                )
              }
            >
              <p>Category 1 Subcategory 3</p>
            </div>
            <div
              className="box"
              onMouseEnter={() =>
                this.onHoverSub(
                  this.props.productData[8].imgPath
                )
              }
            >
              <p>Category 1 Subcategory 4</p>
            </div>
          </>
        );
      case 1:
        return (
          <>
            <div
              className="box"
              onMouseEnter={() =>
                this.onHoverSub(
                  this.props.productData[12].imgPath
                )
              }
            >
              <p>Category 2 Subcategory 1</p>
            </div>
            <div
              className="box"
              onMouseEnter={() =>
                this.onHoverSub(
                  this.props.productData[1].imgPath
                )
              }
            >
              <p>Category 2 Subcategory 2</p>
            </div>
            <div
              className="box"
              onMouseEnter={() =>
                this.onHoverSub(
                  this.props.productData[5].imgPath
                )
              }
            >
              <p>Category 2 Subcategory 3</p>
            </div>
            <div
              className="box"
              onMouseEnter={() =>
                this.onHoverSub(
                  this.props.productData[9].imgPath
                )
              }
            >
              <p>Category 2 Subcategory 4</p>
            </div>
          </>
        );
      case 2:
        return (
          <>
            <div
              className="box"
              onMouseEnter={() =>
                this.onHoverSub(
                  this.props.productData[13].imgPath
                )
              }
            >
              <p>Category 3 Subcategory 1</p>
            </div>
            <div
              className="box"
              onMouseEnter={() =>
                this.onHoverSub(
                  this.props.productData[2].imgPath
                )
              }
            >
              <p>Category 3 Subcategory 2</p>
            </div>
            <div
              className="box"
              onMouseEnter={() =>
                this.onHoverSub(
                  this.props.productData[6].imgPath
                )
              }
            >
              <p>Category 3 Subcategory 3</p>
            </div>
            <div
              className="box"
              onMouseEnter={() =>
                this.onHoverSub(
                  this.props.productData[10].imgPath
                )
              }
            >
              <p>Category 3 Subcategory 4</p>
            </div>
          </>
        );
      case 3:
        return (
          <>
            <div
              className="box"
              onMouseEnter={() =>
                this.onHoverSub(
                  this.props.productData[14].imgPath
                )
              }
            >
              <p>Category 4 Subcategory 1</p>
            </div>
            <div
              className="box"
              onMouseEnter={() =>
                this.onHoverSub(
                  this.props.productData[3].imgPath
                )
              }
            >
              <p>Category 4 Subcategory 2</p>
            </div>
            <div
              className="box"
              onMouseEnter={() =>
                this.onHoverSub(
                  this.props.productData[7].imgPath
                )
              }
            >
              <p>Category 4 Subcategory 3</p>
            </div>
            <div
              className="box"
              onMouseEnter={() =>
                this.onHoverSub(
                  this.props.productData[11].imgPath
                )
              }
            >
              <p>Category 4 Subcategory 4</p>
            </div>
          </>
        );
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
                <div className="box" onMouseEnter={() => this.onHoverMain(0)}>
                  <p>{this.props.categoryData[0].caption}</p>
                </div>
                <div className="box" onMouseEnter={() => this.onHoverMain(1)}>
                  <p>{this.props.categoryData[1].caption}</p>
                </div>
                <div className="box" onMouseEnter={() => this.onHoverMain(2)}>
                  <p>{this.props.categoryData[2].caption}</p>
                </div>
                <div className="box" onMouseEnter={() => this.onHoverMain(3)}>
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
