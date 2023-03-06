import React, { Component } from "react";
import http from "../service/service";

class Login extends Component {
  state = { username: "", password: "" };
  handleUsername(username) {
    this.setState({ username });
  }
  handlePassword(password) {
    this.setState({ password });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    const { username, password } = this.state;
    return (
      <div className="login">
        <h1 className="login-heading"> Login Form</h1>
        <form className="login-form" onSubmit={this.handleSubmit}>
          <div className="input">
            <label htmlFor="name">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => this.handleUsername(e.target.value)}
            />
          </div>
          <div className="input">
            <label htmlFor="password">Password</label>
            <input
              type="text"
              value={password}
              onChange={(e) => this.handlePassword(e.target.value)}
            />
          </div>

          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
