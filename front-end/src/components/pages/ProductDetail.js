import React, { Component } from "react";
import TabNav from "../atoms/TabNav";
import ProductView from "../organisms/ProductView";
import CircularProgress from "@material-ui/core/CircularProgress";
import Paper from "@material-ui/core/Paper";
import { getProduct } from "../../api/product";
import RelevantCarousel from "../molecules/RelevantCarousel";

const carouselData = [
  { caption: "Product 1", url: "/" },
  { caption: "Product 2", url: "/" },
  { caption: "Product 3", url: "/" },
  { caption: "Product 4", url: "/" }
];
export default class ProductPage extends Component {
  state = {
    productDetail: null
  };
  async componentDidMount() {
    let newProductDetail = await getProduct(this.props.match.params.id);
    console.log("newProductDetail");
    console.log(newProductDetail);
    this.setState({
      productDetail: newProductDetail.productDetail[0]
    });
  }
  render() {
    const carouselElements = [
      {
        img:
          "https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      }
    ];
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

                  <TabNav
                    items={[
                      {
                        title: "Product Detail",
                        inside: <p>{this.state.productDetail.description}</p>
                      },
                      {
                        title: "Parameters",
                        inside: <p>Parameters</p>
                      },
                      {
                        title: "Case Study",
                        inside: <p>Case Study</p>
                      }
                    ]}
                  />
                </div>
              ) : (
                <CircularProgress />
              )}
            </div>
            <div style={{ marginBottom: "50px" }}>
              <RelevantCarousel items={carouselData} />
            </div>
          </Paper>
        </div>
      </>
    );
  }
}
