import React, { Component } from "react";
import "../styles/molecules/AppBar.scss";
import { VictoryBar, VictoryChart } from "victory";

const data = [
  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 16500 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 19000 }
];

export default class TestPage extends Component {
  render() {
    return (
      <div style={{ width: "70vw" }}>
        <VictoryChart domainPadding={20}>
          <VictoryBar data={data} x="quarter" y="earnings" />
        </VictoryChart>
      </div>
    );
  }
}
