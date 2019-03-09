import React, { Component } from "react";
import "../styles/pages/Home.scss";
import Gallery from "../atoms/Gallery";
import { getVendorByCat } from "../../api/vendor";
export default class HomePage extends Component {
  state = {
    vendors: null
  };

  async componentDidMount() {
    let categoryId = this.props.match.params.id;
    console.log(`categoryId is +` + categoryId)
    let vendors = await getVendorByCat(categoryId);
    let galleryVendor = vendors.vendors.map(element => {
      console.log("element");
      console.log(element);
      return {
        caption: element.name,
        url: `/category/${categoryId}/vendor/${element._id}`, // where generate the url for next page
        imgPath: element.vendorLogo[0].link
      };
    });
    console.log("vendors.vendors");
    console.log(vendors.vendors);
    this.setState({ vendors: galleryVendor });
  }

  render() {
    console.log(`updated state is ` + JSON.stringify(this.state.vendors));
    return (
      <>
        {this.state.vendors ? (
          <Gallery numberPerPage={10} width="90%" data={this.state.vendors} />
        ) : (
            false
          )}
      </>
    );
  }
}
