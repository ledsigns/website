import React, { Component } from "react";
import TabNav from "../atoms/TabNav";
import ProductView from "../organisms/ProductView";
import CircularProgress from "@material-ui/core/CircularProgress";
import Paper from "@material-ui/core/Paper";
import { getProduct } from "../../api/product";
import RelevantCarousel from "../molecules/RelevantCarousel";
import ExpandCollapse from "react-expand-collapse";
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
    console.log(this.state.productDetail);
    console.log(this.state.relevantProduct);
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
                height: "80vh",
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
                          inside: <p>{this.state.productDetail.description}</p>
                        },
                        {
                          title: "Parameters",
                          inside: (
                            <p>
                              {this.state.productDetail.productDetail.specs}
                            </p>
                          )
                        },
                        {
                          title: "Case Study",
                          inside: (
                            <div
                              style={{
                                overflow: "scroll",
                                height: "500px",
                                minWidth: "60vw"
                              }}
                            >
                              <div
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
                              />
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
