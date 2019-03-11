import React, { Component } from "react";
import "../styles/molecules/NavProductSection.scss";
import ProductElement from "./NavProductElement.js";
import CategoryElement from "./NavCategoryElement.js";

export default class NavProductSection extends Component {
  state = {
    selectedIndex: 0,
    selectedImg:
      "https://s3-ap-southeast-1.amazonaws.com/ledsignstestimg/product/LEDMAN+COB+Display/20180820044507_391976.jpg",
  };

  async componentDidMount() {
    console.log(`passed props ` + JSON.stringify(this.props.categoryData))
    console.log(`passed props ` + JSON.stringify(this.props.productData))
  }

  mapProduct(start, end) {
    let table = []

    for (let i = start; i < end; i++) {
      console.log(`productData is ` + JSON.stringify(this.props.productData[i]))
      table.push(<ProductElement caption={this.props.productData[i].caption}
        onHoverSub={this.onHoverSub.bind(this)}
        imgPath={this.props.productData[i].imgPath}
        url={this.props.productData[i].url} />)
    }
    return table
  }

  mapCategory(start, end, index) {
    let table = []

    for (let i = start; i < end; i++ , index++) {
      console.log(`categoryData is ` + JSON.stringify(this.props.categoryData[i]))
      table.push(<CategoryElement caption={this.props.categoryData[i].caption}
        onHoverSub={this.onHoverSub.bind(this)}
        onHoverMain={this.onHoverMain.bind(this)}
        imgPath={this.props.categoryData[i].imgPath}
        index={index}
        url={this.props.categoryData[i].url} />)
    }
    return table
  }

  renderSwitch(param) {
    switch (param) {
      case 0:
        return (
          <>
            {this.mapProduct(0, 4)}
          </>
        );
      case 1:
        return (
          <>
            {this.mapProduct(4, 8)}
          </>
        );
      case 2:
        return (
          <>
            {this.mapProduct(8, 12)}
          </>
        );
      case 3:
        return (
          <>
            {this.mapProduct(12, 16)}
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
                {this.mapCategory(0, 4, 0)}
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
