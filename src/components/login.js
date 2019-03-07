import React, { Component } from "react";
import api from "../api";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      username: "",
      password: ""
    };
  }

  onRegister = () => {
    console.log("here");
    const url = api.regsiter;
    const body = {
      email: this.state.email,
      username: this.state.username,
      password: this.state.password
    };
    fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
      .then(res => {
        return res.json();
      })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log("Request failed", err);
      });
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div className="App">
        <form>
          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Enter email"
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label> username</label>
            <input
              type="text"
              name="username"
              className="form-control"
              placeholder="Enter username"
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Password"
              onChange={this.onChange}
            />
          </div>

          <button
            type="button"
            className="btn btn-primary"
            onClick={e => this.onRegister()}
          >
            Register
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
