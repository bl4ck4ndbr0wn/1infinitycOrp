import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { View, Mask, Container } from "mdbreact";

import Jumbotron from "./Jumbotron";
import Article from "../articles/Article";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false
    };
  }
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.setState({
        isAuthenticated: !this.state.isAuthenticated
      });
    }
  }

  render() {
    return (
      <div>
        {this.state.isAuthenticated ? "" : <Jumbotron />}\
        <Article />
      </div>
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Landing);
