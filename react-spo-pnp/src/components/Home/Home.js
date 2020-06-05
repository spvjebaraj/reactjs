import React, { Component } from "react";
import UserService from "../../services/UserService";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: ""
    };
    this.userService = new UserService();
  }

  componentDidMount() {
    this.getCurrentUserDetails();
  }

  getCurrentUserDetails() {
    this.userService.getCurrentUserDetails().subscribe(response => {
      this.setState({ displayName: response });
    });
  }
}

export default Home;
