import React, { Component } from "react";
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
      createAccount: true,
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      loading: false
    };
  }

  submitToAuth = (callback, changeContext) => {
    // Get values from the field
    const email = this.state.email;
    const password = this.state.password;
    const firstName = this.state.firstName;
    const lastName = this.state.lastName;
    // Call the callback function with our values

    callback(
      {
        email,
        password,
        firstName,
        lastName
      },
      changeContext
    );
  };

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

  onSignIn = (form, changeToken) => {
    let email = form.email;
    let password = form.email;
    console.log(changeToken);
    // context.changeToken("123456");
    authAPI
      .signIn({ email, password })
      .then(json => {
        console.log(json);

        // console.log("json");
        // console.log(json);
        changeToken(json.token);
      })
      .catch(error => {
        // this.handleError(error.message);
      });
  };

  OnRegister = ({ email, password, firstName, lastName }, changeToken) => {
    authAPI
      .register({
        email,
        password,
        firstName,
        lastName
      })
      .then(json => {
        changeToken(json.token);
        // this.setToken(json.token);
      })
      .catch(error => {
        // console.log(error);
        // this.handleError(error);
      });
  };
  render() {
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
                              this.submitToAuth(
                                this.onSignIn,
                                context.changeToken
                              )
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
                              this.submitToAuth(
                                this.onSignIn,
                                context.changeToken
                              )
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
                              onClick={() =>
                                this.submitToAuth(
                                  this.onSignIn,
                                  context.changeToken
                                )
                              }
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
                            onEnterKeyDown={() =>
                              this.submitToAuth(
                                this.onRegister,
                                context.changeToken
                              )
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
                              this.submitToAuth(this.onRegister)
                            }
                            value={this.state.password}
                            hintText="Password"
                            type="password"
                          />
                          <TextField
                            id="firstName"
                            floatingLabelText="First Name"
                            fullWidth={true}
                            onChange={this.onInputChange}
                            onEnterKeyDown={() =>
                              this.submitToAuth(
                                this.onRegister,
                                context.changeToken
                              )
                            }
                            value={this.state.firstName}
                            hintText="First Name"
                          />
                          <TextField
                            id="lastName"
                            floatingLabelText="Last Name"
                            fullWidth={true}
                            onChange={this.onInputChange}
                            onEnterKeyDown={() =>
                              this.submitToAuth(
                                this.onRegister,
                                context.changeToken
                              )
                            }
                            value={this.state.lastName}
                            hintText="Last Name"
                          />
                        </div>
                        <div className="button">
                          <RaisedButton
                            className="login-button"
                            label="Register"
                            onClick={() =>
                              this.submitToAuth(
                                this.onRegister,
                                context.changeToken
                              )
                            }
                          />

                          <RaisedButton
                            className="create-account-button"
                            label="Log in"
                            onClick={this.handleAccountChange}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </MuiThemeProvider>
          )}
        </TokenContext.Consumer>
      </div>
    );
  }
}
