import React, { Component } from "react";
import "../styles/molecules/AppBar.scss";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import logo from "../../images/logo.png";
import "../styles/molecules/AppBar.scss";
import ItemsCarousel from "react-items-carousel";
import Fade from "@material-ui/core/Fade";
import Paper from "@material-ui/core/Paper";
import NavProductSection from "../molecules/NavProductSection";

const styles = theme => ({
  root: {
    flexGrow: 1
  }
});

class NavSection extends Component {
  state = {
    index: 0,
    show: false
  };

  onnEnter = () => {
    this.setState({ show: true });
  };
  onExit = () => {
    this.setState({ show: false });
  };

  changeIndex = index => {
    this.setState({ show: true, index: index });
  };
  componentUpdate() {
    this.timer = setInterval(
      () => this.slider.slickGoTo(this.state.index),
      500
    );
  }

  render() {
    const { show, index } = this.state;
    return (
      <div className="nav-bar">
        <div className={styles.root} onMouseLeave={() => this.onExit()}>
          <AppBar position="static" color="default">
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div style={{ width: "85%" }}>
                <Toolbar
                  style={{ justifyContent: "space-around", display: "flex" }}
                >
                  <div style={{ width: "20%" }}>
                    <img
                      style={{ maxHeight: "100%", maxWidth: "100%" }}
                      src={logo}
                      alt="logo"
                    />
                  </div>
                  <div
                    className
                    style={{
                      height: "100%",
                      width: "80%",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-around"
                    }}
                  >
                    <a href="/">
                      <div className="navbar-element">
                        <p>Home</p>
                      </div>
                    </a>
                    <div
                      onMouseOver={() => this.changeIndex(0)}
                      className="navbar-element"
                    >
                      <p>Products</p>
                    </div>
                    <div
                      onMouseOver={() => this.changeIndex(1)}
                      className="navbar-element"
                    >
                      <p>Case Study</p>
                    </div>
                    <div
                      onMouseOver={() => this.changeIndex(2)}
                      className="navbar-element"
                    >
                      <p>Solution</p>
                    </div>
                    <div
                      onMouseOver={() => this.changeIndex(3)}
                      className="navbar-element"
                    >
                      <p>About Us</p>
                    </div>
                    <div
                      onMouseOver={() => this.changeIndex(4)}
                      className="navbar-element"
                    >
                      <p>News</p>
                    </div>
                    <div
                      onMouseOver={() => this.changeIndex(5)}
                      className="navbar-element"
                    >
                      <p>Contact Us</p>
                    </div>
                  </div>
                </Toolbar>
              </div>
            </div>
          </AppBar>
          <Fade in={show}>
            <div>
              {show ? (
                <>
                  <ItemsCarousel numberOfCards={1} activeItemIndex={index}>
                    <div style={{ backgroundColor: "white" }}>
                      <div className="slider-element">
                        <div className="slider-nested">
                          <NavProductSection />
                        </div>
                      </div>
                    </div>
                    <div style={{ backgroundColor: "white" }}>
                      <div className="slider-element">
                        <div className="slider-nested">
                          <h2>Sup</h2>
                        </div>
                      </div>
                    </div>
                    <div style={{ backgroundColor: "white" }}>
                      <div className="slider-element">
                        <div className="slider-nested">
                          <h2>Sup</h2>
                        </div>
                      </div>
                    </div>
                    <div style={{ backgroundColor: "white" }}>
                      <div className="slider-element">
                        <div className="slider-nested">
                          <h2>Sup</h2>
                        </div>
                      </div>
                    </div>
                    <div style={{ backgroundColor: "white" }}>
                      <div className="slider-element">
                        <div className="slider-nested">
                          <h2>Sup</h2>
                        </div>
                      </div>
                    </div>
                    <div style={{ backgroundColor: "white" }}>
                      <div className="slider-element">
                        <div className="slider-nested">
                          <h2>Sup</h2>
                        </div>
                      </div>
                    </div>
                  </ItemsCarousel>
                </>
              ) : (
                false
              )}
            </div>
          </Fade>
          {/*  */}
        </div>
      </div>
    );
  }
}

NavSection.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NavSection);
