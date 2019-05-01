import React, { Component } from "react";
import "../styles/molecules/AppBar.scss";
import { VictoryLine, VictoryChart, VictoryContainer, createContainer, VictoryTooltip, VictoryStack } from "victory";
import { userByMonth } from "../../api/boss"

const VictoryZoomVoronoiContainer = createContainer("zoom", "voronoi");
const Month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',]
const nextYrMonth = ['2020 Jan', '2020 Feb', '2020 Mar', '2020 Apr', '2020 May', '2020 Jun', '2020 Jul', '2020 Aug', '2020 Sep', '2020 Oct', '2020 Nov', '2020 Dec',]

export default class clickAmountChart extends Component {

    state = {
        data: [],
        userAmount: []
    };

    async componentDidMount() {
        let responseData = await userByMonth();
        let userAmount = responseData.users.length;

        this.setState({ userAmount: userAmount })

        console.log(responseData.users)

        var clickAmountArr = new Array(12).fill(0);

        for (var i = 0; i < responseData.users.length; i++) {
            try {
                let converted = new Date(responseData.users[i].created);
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
                    label: [`Month: ${"2019 " + Month[i]}`, `New Registered Users: ${clickAmountArr[i]}`]
                }])
            })
        }

        for (var i = 0; i < nextYrMonth.length; i++) {
            this.setState({
                data: this.state.data.concat([{
                    Month: nextYrMonth[i],
                    clickAmount: 0,
                    label: [`Month: ${"2020 " + Month[i]}`, `New Registered Users: ${0}`]
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
                        <h3 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>New User By Month</h3>
                        <h5 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            Current Registered User :
                            <h3 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                {this.state.userAmount}
                            </h3>
                        </h5>
                        <VictoryChart width={1500} height={500} domainPadding={80} containerComponent={
                            <VictoryZoomVoronoiContainer
                                allowZoom={false}
                                zoomDomain={{ x: [0, 20] }}
                                colorScale={["blue"]}
                            />
                        }>
                            <VictoryLine
                                style={{
                                    data: { stroke: "orange" }
                                }}
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