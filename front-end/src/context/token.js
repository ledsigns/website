import React, { Component } from "react";

export const TokenContext = React.createContext();

export class TokenProvider extends Component {
  state = {
    token: 12345
  };
  changeToken(value) {
    console.log("change");
    this.setState({ token: value });
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
