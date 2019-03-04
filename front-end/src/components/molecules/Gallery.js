import React, { Component } from "react";
import "../styles/molecules/cards-gallery.css";
import GalleryItem from "../atoms/GalleryItem";

// const item = () => ({
//   return()
// })

export default class Gallery extends Component {
  render() {
    return (
      <div>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/baguettebox.js/1.10.0/baguetteBox.min.css"
        />
        <link rel="stylesheet" href="cards-gallery.css" />
        <section class="gallery-block cards-gallery">
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              marginTop: "50px"
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                width: "70%"
              }}
              className="row"
            >
              {this.props.data.map(element => {
                return GalleryItem(
                  "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=beautiful-beauty-blue-414612.jpg&fm=jpg",
                  element.caption,
                  element.url
                );
              })}
            </div>
          </div>
          {/* </div> */}
        </section>
      </div>
    );
  }
}
