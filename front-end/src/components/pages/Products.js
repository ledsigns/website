import React, { Component } from "react";
import "../styles/pages/Home.scss";
import Gallery from "../atoms/Gallery";
import { getProductByVendor } from "../../api/product";
export default class HomePage extends Component {
  state = {
    products: null
  };

  async componentDidMount() {
    let vendorId = this.props.match.params.vendorId;
    console.log(`vendorId= ${vendorId}`)
    let products = await getProductByVendor(vendorId);
    console.log(`products =` + JSON.stringify(products))
    let galleryProduct = products.products.map(element => {
      console.log("element");
      console.log(element);
      return {
        caption: element.name,
        url: `/vendor/${element._id}`
      };
    });
    console.log("products.products");
    console.log(products.products);
    this.setState({ products: galleryProduct });
  }

  render() {
    console.log(this.state.products);
    return (
      <>
        {this.state.products ? (
          <Gallery numberPerPage={10} width="90%" data={this.state.products} />
        ) : (
            false
          )}
      </>
    );
  }
}
