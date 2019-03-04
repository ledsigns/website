import React, { Component } from "react";
import "../styles/molecules/cards-gallery.css";
import Paginator from "../atoms/Paginator";
import GalleryItem from "../atoms/GalleryItem";

// const item = () => ({
//   return()
// })

export default class Gallery extends Component {
  state = { currentPage: 1 };

  pageSorter() {
    let numberPerPage = this.props.numberPerPage;

    let data = this.props.data;
    let numberOfPages = Math.floor((data.length + 1) / numberPerPage) + 1;
    let firstIndex = (this.state.currentPage - 1) * numberPerPage;
    let lastIndex = firstIndex + numberPerPage;
    let compareBy;

    let arrayToDisplay = [];

    if (lastIndex > this.props.data.length - 1) {
      compareBy = this.props.data.length;
    } else {
      compareBy = lastIndex;
    }

    for (let i = firstIndex; i < compareBy; i++) {
      arrayToDisplay.push(i);
    }

    // console.log("data.length:", data.length);
    // console.log("numberPerPage:", numberPerPage);
    // console.log("numberOfPages:", numberOfPages);
    // console.log("firstIndex:", firstIndex);
    // console.log("lastIndex:", lastIndex);
    // console.log("this.props.data.length - 1:", this.props.data.length - 1);
    // console.log("compareBy:", compareBy);
    // console.log("arrayToDisplay:", arrayToDisplay);
    return [arrayToDisplay, numberOfPages];
  }

  onChangePage(pageNo) {
    // console.log(pageNo.selected);
    let nextPageNo = pageNo.selected + 1;
    this.setState({ currentPage: nextPageNo });
  }

  render() {
    let arrayToDisplay, numberOfPages;
    [arrayToDisplay, numberOfPages] = this.pageSorter();
    let data = this.props.data;

    return (
      <>
        <div style={{ height: "60vh", display: "block", width: "100vw" }}>
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
                    width: this.props.width
                  }}
                  className="row"
                >
                  {/* {this.props.data.map(element => {
                  return GalleryItem(
                    "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=beautiful-beauty-blue-414612.jpg&fm=jpg",
                    element.caption,
                    element.url
                  );
                })} */}
                  {arrayToDisplay.map(index => {
                    return GalleryItem(
                      "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=beautiful-beauty-blue-414612.jpg&fm=jpg",
                      data[index].caption,
                      data[index].url
                    );
                  })}
                </div>
              </div>
            </section>
          </div>
        </div>
        <div style={{ display: "block", marginTop: "20px", width: "100%" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center"
            }}
          >
            <Paginator
              currentPage={this.state.currentPage}
              numberOfPages={numberOfPages}
              onChangePage={this.onChangePage.bind(this)}
            />
          </div>
        </div>
      </>
    );
  }
}
