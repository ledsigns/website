import React, { Component } from "react";
import "../styles/molecules/AppBar.scss";
import { VictoryBar, VictoryChart, VictoryContainer, createContainer, VictoryTooltip, VictoryStack } from "victory";
import { clickAmount } from "../../api/boss"
import { withRouter } from 'react-router-dom';

const VictoryZoomVoronoiContainer = createContainer("zoom", "voronoi");

class clickAmountChart extends Component {

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
          productId: responseData.productIdArr[i],
          label: [`productName: ${responseData.productNameArr[i]}`, `clickAmount: ${responseData.clickAmountArr[i]}`]
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
            <h3 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Product Click Amount Analysis</h3>
            <VictoryChart width={1500} height={500} domainPadding={80} containerComponent={
              <VictoryZoomVoronoiContainer
                allowZoom={false}
                zoomDomain={{ x: [0, 20] }}
                colorScale={["blue"]}
              />
            }>
              <VictoryBar
                labelComponent={<VictoryTooltip />}
                data={this.state.data} x="productName" y="clickAmount"
                events={[
                  {
                    target: "data",
                    eventHandlers: {
                      onClick: () => {
                        let path = "abc";
                        this.props.history.push(path);
                      }
                    }
                  }
                ]}
              />

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

export default withRouter(clickAmountChart);