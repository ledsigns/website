import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import TextField from "../atoms/TextField";
import * as authAPI from "../../api/auth";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { TokenContext } from "../../context/token";
import { RaisedButton } from "material-ui";

export default props => {
  const [token, setToken] = useState("");
  const [redirect, setRedirect] = useState(false);
  const send = async context => {
    let res = await authAPI.confirm(token, props.location.state);
    // context.changeToken("res");

    context.changeToken(res.data.token);
    localStorage.setItem("token", res.data.token);
    setRedirect(true);
  };

  if (redirect) {
    return <Redirect to="/" />;
  } else {
    return (
      <TokenContext.Consumer>
        {context => (
          <div>
            <p>We Have sent your token</p>
            <p>Please input here</p>
            <MuiThemeProvider>
              <TextField
                value={token}
                onChange={(e, newValue) => {
                  setToken(newValue);
                }}
                onEnter={() => send(context)}
              />
              <RaisedButton onClick={() => send(context)}>Send</RaisedButton>
            </MuiThemeProvider>
          </div>
        )}
      </TokenContext.Consumer>
    );
  }
};
