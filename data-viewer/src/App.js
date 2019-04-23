import React, { Component } from "react";
import "./App.css";
import { getBossData } from "./api/boss";
import { VictoryBar, VictoryChart, VictoryAxis } from "victory";
const converter = data => {
  let names = [];
  let newIndex = [];

  let alteredData = data.categoryArray.map((product, index) => {
    // if (index < 5) {
    names.push(product.name);
    newIndex.push(product.name);
    return { clicks: product.clicks.length, index: index };
    // }
  });

  return {
    index: newIndex,
    axis: names,
    data: alteredData
  };
};
class App extends Component {
  state = {
    data: null
  };
  async componentDidMount() {
    let data = await getBossData();
    console.log(data);
    this.setState({ data: data });
  }
  render() {
    console.log("this.state.data");
    let converted;
    if (!!this.state.data) {
      converted = converter(this.state.data);
      console.log(converted);
    }

    return (
      <div className="App">
        {this.state.data ? (
          <div style={{ height: "100%", width: "80%", marginLeft: "100px" }}>
            <VictoryChart domainPadding={50}>
              <VictoryBar data={converted.data} x="clicks" y="index" />
            </VictoryChart>
          </div>
        ) : (
          false
        )}
      </div>
    );
  }
}

export default App;
