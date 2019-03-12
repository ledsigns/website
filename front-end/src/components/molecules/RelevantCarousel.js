import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "../styles/molecules/HomeCarousel.scss";
import GalleryItem from "../atoms/GalleryItem";



export default class MultipleItems extends Component {

  render() {
    {
      console.log(`passed props is`)
      console.log(this.props.items)
    }
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };
    return (

      <div style={{ backgroundColor: "white" }}>
        {this.props.items ? (
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
                {this.props.items.map(element => {
                  console.log(`element is`)
                  console.log(element)
                  return GalleryItem(
                    element.productDetail.images[0].link,
                    element.name,
                    `/product/${element._id}`,
                    "200px",
                    "240px"
                  );
                })}
              </div>
            </section>
          </div>
        ) : (
            false
          )}
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
