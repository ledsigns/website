import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import "../styles/pages/Login.scss";
import { TokenContext } from "../../context/token";
import * as authAPI from "../../api/auth";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody
} from "mdbreact";

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
      number: "",
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
      <div
        style={{
          paddingTop: "80px",
          paddingBottom: "20px",
          width: "100%",
          height: "95vh"
        }}
        className="align-middle"
      >
        <MDBContainer>
          <MDBRow className="d-flex align-middle justify-content-center">
            <MDBCol>
              <MDBCard>
                <MDBCardBody>
                  <TokenContext.Consumer>
                    {context => (
                      <MuiThemeProvider>
                        <div className="login">
                          {!!this.state.createAccount ? (
                            <div style={{ width: "80%" }}>
                              <p className="h4 text-center py-4">Sign in</p>
                              <MDBInput
                                label="Email"
                                icon="envelope"
                                group
                                type="email"
                                validate
                                error="wrong"
                                success="right"
                                id="email"
                                floatingLabelText="Email"
                                fullWidth={true}
                                onChange={this.onInputChange}
                                value={this.state.email}
                                hintText="Email"
                              />
                              <MDBInput
                                label="Your password"
                                icon="lock"
                                group
                                type="password"
                                validate
                                id="password"
                                onChange={this.onInputChange}
                                value={this.state.password}
                                hintText="Password"
                                type="password"
                              />
                              <div className="text-center py-4 mt-3">
                                <MDBBtn
                                  className="login-button"
                                  label="Register"
                                  onClick={() => this.onRegister()}
                                  color="cyan"
                                  type="submit"
                                >
                                  Login
                                </MDBBtn>
                                <MDBBtn
                                  className="create-account-button"
                                  label="Change To Log in"
                                  onClick={this.handleAccountChange}
                                  color="cyan"
                                  type="submit"
                                >
                                  Switch to Create Account
                                </MDBBtn>
                              </div>
                            </div>
                          ) : (
                            <div style={{ width: "80%" }}>
                              <p className="h4 text-center py-4">
                                Create Account
                              </p>
                              {/* <TextField
                                  id="number"
                                  floatingLabelText="Mobile Number"
                                  fullWidth={true}
                                  required
                                  onChange={this.onInputChange}
                                  onEnterKeyDown={() => this.onRegister()}
                                  value={this.state.number}
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
                                /> */}
                              <MDBInput
                                label="Email"
                                icon="envelope"
                                group
                                type="email"
                                validate
                                error="wrong"
                                success="right"
                                id="email"
                                floatingLabelText="Email"
                                fullWidth={true}
                                onChange={this.onInputChange}
                                value={this.state.email}
                                hintText="Email"
                              />

                              <MDBInput
                                label="Your password"
                                icon="lock"
                                group
                                type="password"
                                validate
                                id="password"
                                onChange={this.onInputChange}
                                value={this.state.password}
                                hintText="Password"
                                type="password"
                              />
                              <MDBInput
                                id="number"
                                required
                                onChange={this.onInputChange}
                                value={this.state.number}
                                hintText="Mobile Number"
                                type="number"
                                label="Number"
                                icon="mobile"
                                group
                                validate
                                error="wrong"
                                success="right"
                                floatingLabelText="Mobile"
                                fullWidth={true}
                                onChange={this.onInputChange}
                              />
                              <MDBInput
                                id="firstName"
                                required
                                onChange={this.onInputChange}
                                value={this.state.number}
                                hintText="First Name"
                                type="text"
                                label="First Name"
                                icon="user-circle"
                                group
                                validate
                                floatingLabelText="First Name"
                                fullWidth={true}
                                onChange={this.onInputChange}
                              />
                              <MDBInput
                                id="lastName"
                                required
                                onChange={this.onInputChange}
                                value={this.state.lastName}
                                hintText="Last Name"
                                type="text"
                                label="Last Name"
                                icon="address-card"
                                group
                                validate
                                floatingLabelText="Last Name"
                                fullWidth={true}
                                onChange={this.onInputChange}
                              />

                              <div className="text-center py-4 mt-3">
                                <MDBBtn
                                  className="login-button"
                                  label="Register"
                                  onClick={() => this.onRegister()}
                                  color="cyan"
                                  type="submit"
                                >
                                  Register
                                </MDBBtn>
                                <MDBBtn
                                  className="create-account-button"
                                  label="Change To Log in"
                                  onClick={this.handleAccountChange}
                                  color="cyan"
                                  type="submit"
                                >
                                  Switch To Login
                                </MDBBtn>
                              </div>
                            </div>
                          )}
                        </div>
                        <h1>{context.state.token}</h1>
                      </MuiThemeProvider>
                    )}
                  </TokenContext.Consumer>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}
