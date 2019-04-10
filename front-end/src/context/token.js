import React, { Component } from "react";

export const TokenContext = React.createContext();

export const TokenConsumer = TokenContext.Consumer;

export class TokenProvider extends Component {
  state = {
    token: ""
  };
  changeToken(value) {
    console.log("change");
    this.setState({ token: value });
  }

  componentDidMount() {
    let token = localStorage.getItem("token");
    this.setState({ token: token });
  }

  render() {
    return (
      <TokenContext.Provider
        value={{
          state: this.state,
          changeToken: newValue => {
            this.changeToken(newValue);
          }
        }}
      >
        {this.props.children}
      </TokenContext.Provider>
    );
  }
}
