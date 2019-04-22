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
        />
      </>
    );
  }
}
