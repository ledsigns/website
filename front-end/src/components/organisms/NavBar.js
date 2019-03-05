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
              <div style={{ width: "65%" }}>
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
                      width: "70%",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center"
                    }}
                  >
                    <a href="/">
                      <div
                        onMouseOver={() => this.changeIndex(0)}
                        className="navbar-element"
                      >
                        <h6>Home</h6>
                      </div>
                    </a>
                    <div
                      onMouseOver={() => this.changeIndex(1)}
                      className="navbar-element"
                    >
                      <h6>Products</h6>
                    </div>

                    <div
                      onMouseOver={() => this.changeIndex(2)}
                      className="navbar-element"
                    >
                      <h6>Whatever</h6>
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
                    {/* <Paper className={styles.paper} elevation={1}> */}
                    <div style={{ backgroundColor: "white" }}>
                      <div className="slider-element">
                        <div className="slider-nested">
                          <h2>hai</h2>
                        </div>
                      </div>
                    </div>
                    {/* </Paper> */}
                    {/* <Paper className={styles.paper} elevation={1}> */}
                    <div style={{ backgroundColor: "white" }}>
                      <div className="slider-element">
                        <div className="slider-nested">
                          <NavProductSection />
                        </div>
                      </div>
                    </div>
                    {/* </Paper> */}
                    {/* <Paper className={styles.paper} elevation={1}> */}
                    <div style={{ backgroundColor: "white" }}>
                      <div className="slider-element">
                        <div className="slider-nested">
                          <h2>Sup</h2>
                        </div>
                      </div>
                    </div>
                    {/* </Paper> */}
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
