import React, { Component } from "react";
import "../styles/molecules/NavProductSection.scss";

export default class NavProductSection extends Component {
  state = {
    selectedIndex: 0,
    selectedImg:
      "https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  };
  renderSwitch(param) {
    switch (param) {
      case 0:
        return (
          <>
            <div
              className="box"
              onMouseEnter={() =>
                this.onHoverSub(
                  "https://images.pexels.com/photos/1020315/pexels-photo-1020315.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                )
              }
            >
              <p>Category 1 Subcategory 1</p>
            </div>
            <div
              className="box"
              onMouseEnter={() =>
                this.onHoverSub(
                  "https://images.pexels.com/photos/292442/pexels-photo-292442.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                )
              }
            >
              <p>Category 1 Subcategory 2</p>
            </div>
            <div
              className="box"
              onMouseEnter={() =>
                this.onHoverSub(
                  "https://images.pexels.com/photos/1250260/pexels-photo-1250260.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                )
              }
            >
              <p>Category 1 Subcategory 3</p>
            </div>
            <div
              className="box"
              onMouseEnter={() =>
                this.onHoverSub(
                  "https://images.pexels.com/photos/259915/pexels-photo-259915.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
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
                  "https://images.pexels.com/photos/1020315/pexels-photo-1020315.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                )
              }
            >
              <p>Category 2 Subcategory 1</p>
            </div>
            <div
              className="box"
              onMouseEnter={() =>
                this.onHoverSub(
                  "https://images.pexels.com/photos/292442/pexels-photo-292442.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                )
              }
            >
              <p>Category 2 Subcategory 2</p>
            </div>
            <div
              className="box"
              onMouseEnter={() =>
                this.onHoverSub(
                  "https://images.pexels.com/photos/1250260/pexels-photo-1250260.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                )
              }
            >
              <p>Category 2 Subcategory 3</p>
            </div>
            <div
              className="box"
              onMouseEnter={() =>
                this.onHoverSub(
                  "https://images.pexels.com/photos/259915/pexels-photo-259915.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
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
                  "https://images.pexels.com/photos/1020315/pexels-photo-1020315.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                )
              }
            >
              <p>Category 3 Subcategory 1</p>
            </div>
            <div
              className="box"
              onMouseEnter={() =>
                this.onHoverSub(
                  "https://images.pexels.com/photos/292442/pexels-photo-292442.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                )
              }
            >
              <p>Category 3 Subcategory 2</p>
            </div>
            <div
              className="box"
              onMouseEnter={() =>
                this.onHoverSub(
                  "https://images.pexels.com/photos/1250260/pexels-photo-1250260.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                )
              }
            >
              <p>Category 3 Subcategory 3</p>
            </div>
            <div
              className="box"
              onMouseEnter={() =>
                this.onHoverSub(
                  "https://images.pexels.com/photos/259915/pexels-photo-259915.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
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
                  "https://images.pexels.com/photos/1020315/pexels-photo-1020315.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                )
              }
            >
              <p>Category 4 Subcategory 1</p>
            </div>
            <div
              className="box"
              onMouseEnter={() =>
                this.onHoverSub(
                  "https://images.pexels.com/photos/292442/pexels-photo-292442.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                )
              }
            >
              <p>Category 4 Subcategory 2</p>
            </div>
            <div
              className="box"
              onMouseEnter={() =>
                this.onHoverSub(
                  "https://images.pexels.com/photos/1250260/pexels-photo-1250260.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                )
              }
            >
              <p>Category 4 Subcategory 3</p>
            </div>
            <div
              className="box"
              onMouseEnter={() =>
                this.onHoverSub(
                  "https://images.pexels.com/photos/259915/pexels-photo-259915.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
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
          <div className="category1">
            <div className="box" onMouseEnter={() => this.onHoverMain(0)}>
              <p>Category 1</p>
            </div>
            <div className="box" onMouseEnter={() => this.onHoverMain(1)}>
              <p>Category 2</p>
            </div>
            <div className="box" onMouseEnter={() => this.onHoverMain(2)}>
              <p>Category 3</p>
            </div>
            <div className="box" onMouseEnter={() => this.onHoverMain(3)}>
              <p>Category 4</p>
            </div>
          </div>
          <div className="category2">
            {this.renderSwitch(this.state.selectedIndex)}
          </div>
          <div className="image">
            <img src={this.state.selectedImg} alt="" />
          </div>
        </div>
      </>
    );
  }
}
