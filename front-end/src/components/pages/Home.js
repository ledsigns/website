import React, { Component } from "react";
import "../styles/pages/Home.scss";
import HomeCarousel from "../molecules/Carousel";
import Gallery from "../atoms/Gallery";
import { getEventData } from "../../api/category";
const elements = [
  {
    img:
      "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=beautiful-beauty-blue-414612.jpg&fm=jpg",
    caption: "Hai"
  },
  {
    img:
      "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=beautiful-beauty-blue-414612.jpg&fm=jpg",
    caption: "Hai"
  }
];
export default class HomePage extends Component {
  state = { categories: null };

  async componentDidMount() {
    let newData = await getEventData();
    let alteredData = newData.categories.map(element => {
      return { caption: element.name, url: `/category/${element._id}` };
    });
    this.setState({ categories: alteredData });
  }

  render() {
    return (
      <div
        style={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column"
        }}
      >
        <HomeCarousel
          showThumbs={false}
          customStyles={{
            height: "60vh",
            objectFit: "cover",
            overflow: "hidden"
          }}
          elements={elements}
        />
        <div
          style={{
            paddingTop: "50px",
            paddingBottom: "50px",
            display: "flex",
            flexDirection: "column",
            textAlign: "center"
          }}
        >
          <h2>SPECIALISED IN LED SOLUTIONS</h2>
          <h6>Innovative & Functional</h6>
          <p>
            With our dedicated team with comprehensive knowledge in LED
            configurations, we aim to create a more than satisfying product for
            your requirements.
          </p>
        </div>
        {/* <div className="about-us">
          <h4>About Us </h4>
          <p>
            CUSTOMIZED FOR YOU As a leader in the industry, Led Signs Pte Ltd
            has a wealth of knowledge and expertise that’s incomparable. We
            utilize this experience to provide both companies and individuals
            with quality and innovative products they can truly count on. In
            addition, we ensure that we stay ahead of the industry curve by
            using the latest technologies. Rest assured that no matter what you
            need, you can rely on us to provide the absolute best. Keep browsing
            through our site to learn more.
          </p>
        </div>
        <div className="specialisation">
          <h4>Specializations</h4>
          <p>
            The selection of products manufactured by LED Signs Pte Ltd are not
            only of the industrial leading quality, but are also available in a
            variety of options to ensure you find exactly what you’re looking
            for. With top-of-the-line materials, cutting-edge production
            technologies and a highly qualified team, we guarantee complete
            satisfaction.
          </p>
        </div> */}

        {this.state.categories ? (
          <Gallery width="60%" numberPerPage={8} data={this.state.categories} />
        ) : (
          false
        )}
      </div>
    );
  }
}
