import React, { Component } from "react";
import "../styles/molecules/AppBar.scss";
import { VictoryBar, VictoryChart, VictoryContainer, createContainer, VictoryTooltip, VictoryStack } from "victory";
import { allByMonth } from "../../api/boss"

const VictoryZoomVoronoiContainer = createContainer("zoom", "voronoi");
const Month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',]
const nextYrMonth = ['2020 Jan', '2020 Feb', '2020 Mar', '2020 Apr', '2020 May', '2020 Jun', '2020 Jul', '2020 Aug', '2020 Sep', '2020 Oct', '2020 Nov', '2020 Dec',]

export default class clickAmountChart extends Component {

    state = {
        data: []

    };

    async componentDidMount() {
        let responseData = await allByMonth();
        console.log(responseData)

        var clickAmountArr = new Array(12).fill(0);

        for (var i = 0; i < responseData.clicksDateArr.length; i++) {
            try {
                let converted = new Date(responseData.clicksDateArr[i]);
                let monthName = converted.toString().slice(4, 7)
                let index = Month.indexOf(monthName)
                clickAmountArr[index] += 1
            }
            catch (err) {
                console.log(err)
            }
        }

        console.log(JSON.stringify(clickAmountArr))

        for (var i = 0; i < Month.length; i++) {
            this.setState({
                data: this.state.data.concat([{
                    Month: "2019 " + Month[i],
                    clickAmount: clickAmountArr[i],
                    label: [`Month: ${"2019 " + Month[i]}`, `clickAmount: ${clickAmountArr[i]}`]
                }])
            })
        }

        for (var i = 0; i < nextYrMonth.length; i++) {
            this.setState({
                data: this.state.data.concat([{
                    Month: nextYrMonth[i],
                    clickAmount: 0,
                    label: [`Month: ${"2029 " + Month[i]}`, `clickAmount: ${clickAmountArr[i]}`]
                }])
            })
        }

    }
    render() {
        { console.log(`updated state ${JSON.stringify(this.state.dates)}`) }
        return (
            <div style={{
                overflowY: "hidden"
            }}>
                {this.state.data != [] ? (
                    < div >
                        <h3 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Click Amount By Month</h3>
                        <VictoryChart width={1500} height={500} domainPadding={80} containerComponent={
                            <VictoryZoomVoronoiContainer
                                allowZoom={false}
                                zoomDomain={{ x: [0, 20] }}
                                colorScale={["blue"]}
                            />
                        }>
                            <VictoryBar
                                labelComponent={<VictoryTooltip />}
                                data={this.state.data} x="Month" y="clickAmount" />

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