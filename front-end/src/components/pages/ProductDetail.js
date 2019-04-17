import React, { Component } from "react";
import TabNav from "../atoms/TabNav";
import ProductView from "../organisms/ProductView";
import CircularProgress from "@material-ui/core/CircularProgress";
import Paper from "@material-ui/core/Paper";
import { getProduct } from "../../api/product";
import RelevantCarousel from "../molecules/RelevantCarousel";
import "../styles/pages/ProductDetail.scss";

export default class ProductPage extends Component {
  state = {
    productDetail: null,
    relevantProduct: null
  };
  async componentDidMount() {
    let newProductDetail = await getProduct(this.props.match.params.id);
    this.setState({
      productDetail: newProductDetail.productDetail[0],
      relevantProduct: newProductDetail.relevantProduct
    });
    console.log("updated State");
    console.log(this.props.poggedIn);
  }
  render() {
    return (
      <>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: "40px",
            paddingBottom: "40px"
            // verticalAlign: "middle",
            // alignItems: "center"
          }}
        >
          <Paper>
            <div
              style={{
                margin: "50px 50px 50px 50px",
                width: "70vw",
                height: "140vh",
                display: "flex",
                justifyContent: "center"
                // verticalAlign: "middle",
                // alignItems: "center"
              }}
            >
              {this.state.productDetail ? (
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column"
                  }}
                >
                  <div style={{ width: "100%" }}>
                    <ProductView productDetail={this.state.productDetail} />
                  </div>

                  <div>
                    <TabNav
                      items={[
                        {
                          title: "Product Detail",
                          inside: (
                            <div>
                              {this.state.loggedIn ? (
                                <div>
                                  <p>{this.state.productDetail.description}</p>
                                </div>
                              ) : (
                                <div
                                  style={{
                                    width: "100%",
                                    position: "relative"
                                  }}
                                >
                                  <div
                                    style={{
                                      color: "transparent",
                                      textShadow: "0px 0px 10px #000"
                                    }}
                                  >
                                    <p>
                                      {this.state.productDetail.description}
                                    </p>
                                  </div>
                                  <div
                                    style={{
                                      zIndex: "2",
                                      position: "absolute",
                                      top: "10px",
                                      left: "0",
                                      width: "100%"
                                    }}
                                  >
                                    Please login
                                  </div>
                                </div>
                              )}
                            </div>
                          )
                        },
                        {
                          title: "Parameters",
                          inside: (
                            <div>
                              <p style={{}}>
                                {this.state.productDetail.productDetail.specs}
                              </p>
                            </div>
                          )
                        },
                        {
                          title: "Case Study",
                          inside: (
                            <div
                              style={{
                                overflowY: "scroll",
                                height: "50%",
                                minWidth: "250%"
                              }}
                            >
                              {/* <div
                                style={{
                                  height: "500px",
                                  width: "500px",
                                  backgroundImage: `url(${
                                    this.state.productDetail.productDetail
                                      .showCase[0].link1
                                  })`,
                                  backgroundRepeat: "no-repeat",
                                  backgroundPosition: "center center",
                                  backgroundSize: "contain"
                                }}
                              />
                              <div
                                style={{
                                  height: "500px",
                                  width: "500px",
                                  backgroundImage: `url(${
                                    this.state.productDetail.productDetail
                                      .showCase[0].link2
                                  })`,
                                  backgroundRepeat: "no-repeat",
                                  backgroundPosition: "center center",
                                  backgroundSize: "contain"
                                }}
                              />
                              <div
                                style={{
                                  height: "500px",
                                  width: "500px",
                                  backgroundImage: `url(${
                                    this.state.productDetail.productDetail
                                      .showCase[0].link3
                                  })`,
                                  backgroundRepeat: "no-repeat",
                                  backgroundPosition: "center center",
                                  backgroundSize: "contain"
                                }}
                              /> */}
                            </div>
                          )
                        }
                      ]}
                    />
                  </div>
                </div>
              ) : (
                <CircularProgress />
              )}
            </div>
            <div style={{ marginBottom: "50px" }}>
              {console.log(
                `props items passing si +` + this.state.relevantProduct
              )}
              <RelevantCarousel items={this.state.relevantProduct} />
            </div>
          </Paper>
        </div>
      </>
    );
  }
}
