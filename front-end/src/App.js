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
import ProductVendorPage from "./components/pages/ProductVendor";
import ProductByCategoryPage from "./components/pages/ProductByCategory";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./main.scss";

// import { BrowserRouter as Router, Route, Switch } from "react-router";

class App extends Component {
  render() {
    return (
      <div className="main" style={{ position: "relative" }}>
        <NavBar />
        <HoverButton />
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/category/:id" component={VendorsPage} />
            <Route exact path="/test" component={TestPage} />
            <Route exact path="/product/:id" component={ProductDetailPage} />
            <Route
              exact
              path="/product/:id/vendor"
              component={ProductVendorPage}
            />
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
        <BottomSection />
      </div>
    );
  }
}

export default App;
