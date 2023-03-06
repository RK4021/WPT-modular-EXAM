import React, { Component } from "react";
import http from "../service/service";

class Register extends Component {
  state = {
    name: "",
    address: "",
    tPhone: "",
    aadhar: "",
    username: "",
    password: "",
  };

  handleName(name) {
    this.setState({ name });
  }
  handlAddress(address) {
    this.setState({ address });
  }
  handleTPhone(tPhone) {
    this.setState({ tPhone });
  }
  handleUsername(username) {
    this.setState({ username });
  }
  handlePassword(password) {
    this.setState({ password });
  }
  handleAadhar(aadhar) {
    this.setState({ aadhar });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    const { name, address, tPhone, username, password, aadhar } = this.state;
    return (
      <div className="register">
        <h1 className="register-heading"> Register Form</h1>
        <form className="register-form" onSubmit={this.handleSubmit}>
          <div className="input">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => this.handleName(e.target.value)}
            />
          </div>
          <div className="input">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => this.handleUsername(e.target.value)}
            />
          </div>
          <div className="input">
            <label htmlFor="aadhar">Aadhar</label>
            <input
              type="number"
              value={username}
              onChange={(e) => this.handleAadhar(e.target.value)}
            />
          </div>
          <div className="input">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => this.handlePassword(e.target.value)}
            />
          </div>
          <div className="input">
            <label htmlFor="tPhone">TPhone</label>
            <input
              type="number"
              value={tPhone}
              onChange={(e) => this.handleTPhone(e.target.value)}
            />
          </div>
          <div className="input">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              value={address}
              onChange={(e) => this.handlAddress(e.target.value)}
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

export default Register;
