import React, { Component } from "react";
import "../styles/pages/Home.scss";
import HomeCarousel from "../molecules/Carousel";
import Gallery from "../atoms/Gallery";
import { getHomePageData } from "../../api/homePage";
import SearchBar from "material-ui-search-bar";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Paper from "@material-ui/core/Paper";
import Dropdown from "../molecules/Dropdown";
import Fade from "@material-ui/core/Fade";

const elements = [
  {
    img: "http://www.unilumin.com/upload/Banner/userfaceIII.jpg",
    caption: "Hai"
  },
  {
    img: "http://www.unilumin.com/upload/Banner/UTV3banner.jpg",
    caption: "Hai"
  },
  {
    img: "http://www.unilumin.com/upload/2019011817390706.jpg",
    caption: "Hai"
  }
];
const options = ["Categories", "Vendor", "Products"];

function sortData(selectedIndex, data, searchText) {
  let toReturn = [];
  let reg = new RegExp(`${searchText}`, "i");
  let elements;
  switch (selectedIndex) {
    case 0:
      elements = data.categories;
      for (let i = 0; i < elements.length; i++) {
        if (elements[i].name.match(reg)) {
          toReturn.push({
            caption: elements[i].name,
            url: `/category/${elements[i]._id}`,
            imgPath: elements[i].categoryLogo[0].link
          });
        }
      }
      break;
    case 1:
      elements = data.vendors;
      for (let i = 0; i < elements.length; i++) {
        if (elements[i].name.match(reg)) {
          toReturn.push({
            caption: elements[i].name,
            url: `/vendor/${elements[i]._id}`,
            imgPath: elements[i].vendorLogo[0].link
          });
        }
      }
      break;
    case 2:
      elements = data.products;
      for (let i = 0; i < elements.length; i++) {
        if (elements[i].name.match(reg)) {
          console.log(`productDetails is ` + JSON.stringify(data));
          toReturn.push({
            caption: elements[i].name,
            url: `/product/${elements[i]._id}`,
            imgPath: elements[i].productDetail.images[0].link
          });
        }
      }
      break;
    default:
      break;
  }
  return toReturn;
}
export default class HomePage extends Component {
  state = {
    data: null,
    anchorEl: null,
    selectedIndex: 0,
    categories: null,
    searchText: "",
    searchResult: null,
    searchGroup: null
  };
  handleClickListItem = event => {
    this.setState({
      anchorEl: event.currentTarget
    });
  };

  handleMenuItemClick = (event, index) => {
    this.setState({
      selectedIndex: index,
      anchorEl: null
    });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  async componentDidMount() {
    let newData = await getHomePageData();
    let alteredData = newData.categories.map(element => {
      return {
        caption: element.name,
        url: `/category/${element._id}`, // where generate the url for next page
        imgPath: element.categoryLogo[0].link
      };
    });
    this.setState({
      data: newData,
      categories: alteredData,
      searchResult: alteredData
    });
  }

  onChangeSearch(value) {
    this.setState({ searchText: value });

    //     let returnCategories = [];
    //     let reg = new RegExp(`${searchText}`, "i");
    //     categories.forEach((searchCategory, i) => {
    //       if (categories[i].caption.match(reg)) {
    //         returnCategories.push(searchCategory);
    //       }
    //     });
    //     console.log(`searchResult are ` + JSON.stringify(returnCategories));
    //     this.setState({ searchResult: returnCategories });
    //   // });
  }

  render() {
    let toShow;
    if (this.state.data) {
      toShow = sortData(
        this.state.selectedIndex,
        this.state.data,
        this.state.searchText
      );
    }
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

        {this.state.categories ? (
          <Fade in={true} timeout={2000}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                textAlign: "center",
                width: "100%"
              }}
            >
              <h2>Search Now</h2>
              <div
                style={{
                  margin: "auto",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                  width: "80%"
                }}
              >
                <div
                  style={{
                    width: "15%"
                  }}
                >
                  <Dropdown
                    anchorEl={this.state.anchorEl}
                    options={options}
                    selectedIndex={this.state.selectedIndex}
                    handleClickListItem={this.handleClickListItem.bind(this)}
                    handleMenuItemClick={this.handleMenuItemClick.bind(this)}
                    handleClose={this.handleClose.bind(this)}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "83%"
                  }}
                >
                  <div style={{ width: "100%" }}>
                    <MuiThemeProvider>
                      <div
                        style={{
                          minWidth: "100%",
                          height: "66px",
                          display: "flex",
                          alignItems: "center"
                        }}
                      >
                        <SearchBar
                          onChange={this.onChangeSearch.bind(this)}
                          style={{ width: "100%" }}
                        />
                      </div>
                    </MuiThemeProvider>
                  </div>
                </div>
              </div>
              <div>
                <MuiThemeProvider>
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center"
                    }}
                  >
                    <div
                      style={{
                        width: "80%",
                        paddingTop: "20px",
                        paddingBottom: "20px"
                      }}
                    >
                      <Paper>
                        <div
                          style={{
                            paddingTop: "10px"
                          }}
                        >
                          <Gallery
                            width="90%"
                            numberPerPage={8}
                            data={toShow}
                          />
                        </div>
                      </Paper>
                    </div>
                  </div>
                </MuiThemeProvider>
              </div>
            </div>
          </Fade>
        ) : (
          false
        )}
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "100px"
          }}
        >
          {/* <h3>Our clients</h3>
          <p>________</p>
          <ClientSlider /> */}
        </div>
      </div>
    );
  }
}
