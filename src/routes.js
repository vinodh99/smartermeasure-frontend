import React from "react";
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";

import Login from "./components/login";
import User from "./components/user";
import Results from "./components/results";

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" render={props => <Login {...props} />} />
        {/* <Route exact path="/user" render={props => <User {...props} />} /> */}
        <Route exact path="/results" render={props => <Results {...props} />} />
        {/* <Route
          exact
          path="/AddEmployee"
          render={props => <AddEmployee {...props} />}
        />
        <Route
          exact
          path="/SearchEmployee"
          render={props => <SearchEmployee {...props} />}
        /> */}

        <Redirect to="/login" />
      </Switch>
    </BrowserRouter>
  );
};
