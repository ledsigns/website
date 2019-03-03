import React, { Component } from "react";
import "../styles/pages/Home.scss";
import Gallery from "../atoms/Gallery";
import { getVendorByCat } from "../../api/vendor";
export default class HomePage extends Component {
  state = {
    vendors: null
  };

  async componentDidMount() {
    let vendorId = this.props.match.params.id;
    let vendors = await getVendorByCat(vendorId);
    let galleryVendor = vendors.vendors.map(element => {
      return {
        caption: element.name,
        url:
          "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=beautiful-beauty-blue-414612.jpg&fm=jpg"
      };
    });
    this.setState({ vendors: galleryVendor });
  }

  render() {
    console.log(this.state.vendors);
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
