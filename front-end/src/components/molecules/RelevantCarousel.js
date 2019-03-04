import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "../styles/molecules/HomeCarousel.scss";
import GalleryItem from "../atoms/GalleryItem";

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };
    return (
      <div style={{ backgroundColor: "white" }}>
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
              {/* {this.props.data.map(element => {
                  return GalleryItem(
                    "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=beautiful-beauty-blue-414612.jpg&fm=jpg",
                    element.caption,
                    element.url
                  );
                })} */}
              {GalleryItem(
                "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=beautiful-beauty-blue-414612.jpg&fm=jpg",
                "Product1",
                "/",
                "240px",
                "280px"
              )}
              {GalleryItem(
                "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=beautiful-beauty-blue-414612.jpg&fm=jpg",
                "Product1",
                "/",
                "250px",
                "280px"
              )}
              {GalleryItem(
                "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=beautiful-beauty-blue-414612.jpg&fm=jpg",
                "Product1",
                "/",
                "250px",
                "280px"
              )}
              {GalleryItem(
                "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=beautiful-beauty-blue-414612.jpg&fm=jpg",
                "Product1",
                "/",
                "250px",
                "280px"
              )}
            </div>
          </section>
        </div>
      </div>
    );
  }
}
{
  GalleryItem(
    "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=beautiful-beauty-blue-414612.jpg&fm=jpg",
    "Hai",
    "/"
  );
}
