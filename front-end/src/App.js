import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/organisms/NavBar";
import TestPage from "./components/pages/Test";
import HomePage from "./components/pages/Home";
import VendorsPage from "./components/pages/Vendors";
import ProductsPage from "./components/pages/Products";
import ProductDetailPage from "./components/pages/ProductDetail";
import HoverButton from "./components/molecules/Hover";
import BottomSection from "./components/organisms/BottomSection";
import ProductByVendorPage from "./components/pages/ProductByVendor";
import ProductByCategoryPage from "./components/pages/ProductByCategory";
import { getNavBarData } from "./api/navBar";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./main.scss";
import { CircularProgress } from "@material-ui/core";

// import { BrowserRouter as Router, Route, Switch } from "react-router";

class App extends Component {
  state = {
    productData: null,
    categoryData: null
  };
  async componentDidMount() {
    let newData = await getNavBarData();

    let categoryData = newData.categoryArray.map(element => {
      return {
        caption: element.name,
        url: `/productByCategory/${element._id}`, // where generate the url for next page
        imgPath: element.categoryLogo[0].link
      };
    });

    let productData = newData.productArray.map(element => {
      return {
        caption: element.name,
        url: `/product/${element._id}`, // where generate the url for next page
        imgPath: element.productDetail.images[0].link
      };
    });
    this.setState({
      productData: productData,
      categoryData: categoryData
    });
  }
  render() {
    console.log("categoryData");
    console.log(this.state.categoryData);
    return (
      <div className="main" style={{ position: "relative" }}>
        <NavBar
          categoryData={this.state.categoryData}
          productData={this.state.productData}
        />
        <HoverButton />
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/category/:id" component={VendorsPage} />
            <Route exact path="/test" component={TestPage} />
            <Route exact path="/product/:id" component={ProductDetailPage} />
            <Route exact path="/vendor/:id" component={ProductByVendorPage} />
            <Route
              exact
              path="/category/:categoryId/vendor/:vendorId"
              component={ProductsPage}
            />
            <Route
              exact
              path="/productByCategory/:categoryId"
              component={ProductByCategoryPage}
            />
          </Switch>
        </Router>
        <BottomSection categoryData={this.state.categoryData} />
      </div>
    );
  }
}

export default App;
