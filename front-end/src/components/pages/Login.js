import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Divider from "material-ui/Divider";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "../atoms/TextField";
import "../styles/pages/Login.scss";
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

  submitToAuth = callback => {
    // Get values from the field
    const email = this.state.email;
    const password = this.state.password;
    const firstName = this.state.firstName;
    const lastName = this.state.lastName;
    // Call the callback function with our values
    callback({ email, password, firstName, lastName });
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

  render() {
    return (
      <div className="login-background">
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
                        // onEnterKeyDown={() =>
                        //   this.submitToAuth(this.props.onSignIn)
                        // }
                        value={this.state.email}
                        hintText="Email"
                      />
                      <TextField
                        id="password"
                        floatingLabelText="Password"
                        fullWidth={true}
                        onChange={this.onInputChange}
                        onEnterKeyDown={() =>
                          this.submitToAuth(this.props.onSignIn)
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
                          onClick={() => this.submitToAuth(this.props.onSignIn)}
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
                          this.submitToAuth(this.props.onRegister)
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
                          this.submitToAuth(this.props.onRegister)
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
                          this.submitToAuth(this.props.onRegister)
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
                          this.submitToAuth(this.props.onRegister)
                        }
                        value={this.state.lastName}
                        hintText="Last Name"
                      />
                    </div>
                    <div className="button">
                      <RaisedButton
                        className="login-button"
                        label="Register"
                        onClick={() => this.submitToAuth(this.props.onRegister)}
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
      </div>
    );
  }
}
