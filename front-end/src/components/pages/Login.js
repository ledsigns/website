import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import RaisedButton from "material-ui/RaisedButton";

import TextField from "../atoms/TextField";
import "../styles/pages/Login.scss";
import { TokenContext } from "../../context/token";
import * as authAPI from "../../api/auth";
let logo = "";

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: null,
      createAccount: true,
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      loading: false
    };
  }

  //handle user input and set password and email state
  onInputChange = (e, newValue) => {
    this.setState({
      [e.target.id]: newValue
    });
  };

  handleAccountChange = () =>
    this.setState({
      createAccount: !this.state.createAccount
    });

  componentDidMount() {
    // init google auth
    // oauthApi.start(this.changeLoading, this.props.setToken,this.props.handleErrors)
  }

  onSignIn = changeToken => {
    const email = this.state.email;
    const password = this.state.password;

    console.log(changeToken);
    // context.changeToken("123456");
    authAPI
      .signIn({ email, password })
      .then(json => {
        console.log(json);

        // console.log("json");
        // console.log(json);
        localStorage.setItem("token", json.token);
        changeToken(json.token);
      })
      .catch(error => {
        // this.handleError(error.message);
      });
  };

  async onRegister() {
    let res = await authAPI.send();
    this.setState({ token: res.data.id });
    // authAPI
    //   .register({
    //     email,
    //     password,
    //     firstName,
    //     lastName
    //   })
    //   .then(json => {
    //     changeToken(json.token);
    //     // this.setToken(json.token);
    //   })
    //   .catch(error => {
    //     // console.log(error);
    //     // this.handleError(error);
    //   });
  }
  render() {
    if (this.state.token) {
      return (
        <Redirect
          to={{
            pathname: "/verify",
            state: {
              token: this.state.token,
              email: this.state.email,
              password: this.state.password,
              firstName: this.state.firstName,
              lastName: this.state.lastName
            }
          }}
        />
      );
    }
    return (
      <div className="login-background">
        <TokenContext.Consumer>
          {context => (
            <MuiThemeProvider>
              <div className="login">
                {!!this.state.createAccount ? (
                  <div className="welcome-container">
                    <div className="login-dialog">
                      <img src={logo} alt="logo" className="wimo-login-logo" />
                      <div>
                        <div className="element" />
                        <div className="login-text-fields">
                          <TextField
                            id="email"
                            floatingLabelText="Email"
                            fullWidth={true}
                            onChange={this.onInputChange}
                            onEnterKeyDown={() =>
                              this.onSignIn(context.changeToken)
                            }
                            value={this.state.email}
                            hintText="Email"
                          />
                          <TextField
                            id="password"
                            floatingLabelText="Password"
                            fullWidth={true}
                            onChange={this.onInputChange}
                            onEnterKeyDown={() =>
                              this.onSignIn(context.changeToken)
                            }
                            value={this.state.password}
                            hintText="Password"
                            type="password"
                          />
                        </div>
                        <div>
                          <div className="button">
                            <RaisedButton
                              className="login-button"
                              label="Log in"
                              onClick={() => this.onSignIn(context.changeToken)}
                            />
                            <br />
                            <RaisedButton
                              className="create-account-button"
                              label="Create"
                              onClick={this.handleAccountChange}
                            />
                          </div>
                        </div>
                        <div className="login-divider" />
                      </div>
                    </div>
                    <div />
                  </div>
                ) : (
                  <div className="welcome-container">
                    <div className="login-dialog">
                      <img src={logo} alt="logo" className="wimo-login-logo" />
                      <div>
                        <div className="element" />
                        <div className="login-text-fields">
                          <TextField
                            id="email"
                            floatingLabelText="Email"
                            fullWidth={true}
                            onChange={this.onInputChange}
                            onEnterKeyDown={() => this.onRegister()}
                            value={this.state.email}
                            hintText="Email"
                          />
                          <TextField
                            id="password"
                            floatingLabelText="Password"
                            fullWidth={true}
                            onChange={this.onInputChange}
                            onEnterKeyDown={() => this.onRegister()}
                            value={this.state.password}
                            hintText="Password"
                            type="password"
                          />
                          <TextField
                            id="telephone"
                            floatingLabelText="Mobile Number"
                            fullWidth={true}
                            required
                            onChange={this.onInputChange}
                            onEnterKeyDown={() => this.onRegister()}
                            value={this.state.password}
                            hintText="Mobile Number"
                            type="number"
                          />
                          <TextField
                            id="firstName"
                            floatingLabelText="First Name"
                            fullWidth={true}
                            onChange={this.onInputChange}
                            onEnterKeyDown={() => this.onRegister()}
                            value={this.state.firstName}
                            hintText="First Name"
                          />
                          <TextField
                            id="lastName"
                            floatingLabelText="Last Name"
                            fullWidth={true}
                            onChange={this.onInputChange}
                            onEnterKeyDown={() => this.onRegister()}
                            value={this.state.lastName}
                            hintText="Last Name"
                          />
                        </div>
                        <div className="button">
                          <RaisedButton
                            className="login-button"
                            label="Register"
                            onClick={() => this.onRegister()}
                          />

                          <RaisedButton
                            className="create-account-button"
                            label="Change To Log in"
                            onClick={this.handleAccountChange}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <h1>{context.state.token}</h1>
            </MuiThemeProvider>
          )}
        </TokenContext.Consumer>
      </div>
    );
  }
}
