import React, { Component } from "react";
import TabNav from "../atoms/TabNav";
import ProductView from "../organisms/ProductView";
import CircularProgress from "@material-ui/core/CircularProgress";
import Paper from "@material-ui/core/Paper";
import { getProduct } from "../../api/product";

export default class ProductPage extends Component {
  state = {
    productDetail: null
  };
  async componentDidMount() {
    let newProductDetail = await getProduct(this.props.match.params.id);
    console.log(newProductDetail.productDetail[0]);
    this.setState({
      productDetail: newProductDetail.productDetail[0]
    });
  }
  render() {
    return (
      <>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: "40px"
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

                  <TabNav />
                </div>
              ) : (
                <CircularProgress />
              )}
            </div>
          </Paper>
        </div>
      </>
    );
  }
}
