import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/organisms/NavBar";
import TestPage from "./components/pages/Test";
import HomePage from "./components/pages/Home";
// import CategoryVendorPage from "./components/pages/CategoryVendorPage";
import CategoryPage from "./components/pages/Category";
import ProductPage from "./components/pages/ProductPage";
import HoverButton from "./components/molecules/Hover";
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
            <Route exact path="/category/:id" component={CategoryPage} />
            {/* <Route exact path="/category/:id/vendor/:vendorId" component={CategoryPage} /> */}
            <Route exact path="/test" component={TestPage} />
            <Route exact path="/product/:id" component={ProductPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
