import React, { Component } from "react";
import "../styles/pages/Home.scss";
import Gallery from "../atoms/Gallery";
import { getProductByVendor } from "../../api/product";
export default class HomePage extends Component {
  state = {
    products: null
  };

  async componentDidMount() {
    let vendorId = this.props.match.params.id;
    console.log(`vendorId is +` + vendorId)
    let products = await getProductByVendor(vendorId);
    // console.log(`products is +` + JSON.stringify(products))
    let galleryProducts = products.products.map(element => {
      console.log("element");
      console.log(element);
      return {
        caption: element.name,
        url: `/product/${element._id}`, // where generate the url for next page
        imgPath: element.productDetail.images[0].link
      };
    });
    console.log("galleryProducts");
    console.log(galleryProducts);
    this.setState({ products: galleryProducts });
  }

  render() {
    console.log(`updated state is ` + JSON.stringify(this.state.products));
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
