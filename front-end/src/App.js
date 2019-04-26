import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/organisms/NavBar";
import DataAnalysis from "./components/pages/DataAnalysis";
import HomePage from "./components/pages/Home";
import VendorsPage from "./components/pages/Vendors";
import ProductsPage from "./components/pages/Products";
import VerifyPage from "./components/pages/Verify";
import ProductDetailPage from "./components/pages/ProductDetail";
import HoverButton from "./components/molecules/Hover";
import BottomSection from "./components/organisms/BottomSection";
import ProductByVendorPage from "./components/pages/ProductByVendor";
import ProductByCategoryPage from "./components/pages/ProductByCategory";
import LoginPage from "./components/pages/Login";
import * as authAPI from "./api/auth";
import { getNavBarData } from "./api/navBar";
import { TokenProvider, TokenContext } from "./context/token";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./main.scss";

// import { BrowserRouter as Router, Route, Switch } from "react-router";

class App extends Component {
  state = {
    productData: null,
    categoryData: null,
    token: null
  };
  async componentDidMount() {
    authAPI.init(this.handleError, this.handleSignOut);
    let newData = await getNavBarData();

    let categoryData = newData.categoryArray.map(element => {
      return {
        caption: element.name,
        url: `/productByCategory/${element._id}`, // where generate the url for next page
        imgPath: element.categoryLogo[0].link,
        id: element._id
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
    return (
      <TokenProvider>
        <div className="main" style={{ position: "relative", overflowY: "hidden" }}>
          <NavBar
            categoryData={this.state.categoryData}
            productData={this.state.productData}
          />
          <TokenContext.Consumer>
            {context => (
              <>
                <br />

                <h1>{context.state.token}</h1>
              </>
            )}
          </TokenContext.Consumer>
          <HoverButton />
          <Router>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/category/:id" component={VendorsPage} />
              <Route exact path="/dataAnalysis" component={DataAnalysis} />
              <Route
                exact
                path="/product/:id"
                loggedIn={!this.state.token}
                component={ProductDetailPage}
              />
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
              <Route exact path="/verify" component={VerifyPage} />
              <Route
                path="/login"
                render={() => <LoginPage handleErrors={this.handleError} />}
              />
            </Switch>
          </Router>
          <BottomSection categoryData={this.state.categoryData} />
        </div>
      </TokenProvider>
    );
  }
}

export default App;
