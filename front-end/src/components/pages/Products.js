import React, { Component } from "react";
import "../styles/pages/Home.scss";
import Gallery from "../atoms/Gallery";
import { getProductByCategoryAndVendor } from "../../api/product";
export default class HomePage extends Component {
  state = {
    products: null
  };

  async componentDidMount() {
    let categoryId = this.props.match.params.categoryId;
    let vendorId = this.props.match.params.vendorId;
    let products = await getProductByCategoryAndVendor(categoryId, vendorId);
    let galleryProduct = products.products.map(element => {
      return {
        caption: element.name,
        url: `/product/${element._id}`, // where generate the url for next page
        imgPath: element.productDetail.images[0].link
      };
    });
    this.setState({ products: galleryProduct });
  }

  render() {
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
