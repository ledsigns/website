import React, { Component } from "react";
import "../styles/molecules/AppBar.scss";
import { VictoryBar, VictoryChart, VictoryContainer, createContainer } from "victory";
import { clickAmount } from "../../api/boss"

// const data = [

// ];

// for (..) {
//   data.push({
//     productName:...,
//     clickAmount:...
//   })
// }

const VictoryZoomVoronoiContainer = createContainer("zoom", "voronoi");

export default class TestPage extends Component {

  state = {
    data: []
  };

  async componentDidMount() {
    let responseData = await clickAmount();
    console.log(`responseData` + JSON.stringify(responseData))
    for (var i = 0; i < responseData.clickAmountArr.length; i++) {

      this.setState({
        data: this.state.data.concat([{
          productName: responseData.productNameArr[i],
          clickAmount: responseData.clickAmountArr[i],
        }])
      })
    }
    { console.log(`data is updated?` + JSON.stringify(this.state.data)) }
  }
  render() {
    return (
      <div style={{
        overflowY: "hidden"
      }}>
        {this.state.data != [] ? (
          < div >
            <VictoryChart width={1500} height={500} domainPadding={80} containerComponent={
              <VictoryZoomVoronoiContainer
                labels={(data) => `${data.x}, ${data.y}`} // i want to pass this.state.data for labels function
              />
            }>
              <VictoryBar data={this.state.data} x="productName" y="clickAmount" />
            </VictoryChart>
          </div>
        ) : (
            false
          )
        }
      </div>
    );
  }
}
