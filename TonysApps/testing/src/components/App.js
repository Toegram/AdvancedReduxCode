import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import CommentBox from "./CommentBox.js";
import CommentList from "./CommentList.js";
import * as actions from "../actions";

class App extends Component {
  renderButton() {
    if (this.props.auth) {
      return (
        <button onClick={() => this.props.changeAuth(false)}>Sign Out</button>
      );
    } else {
      return (
        <button onClick={() => this.props.changeAuth(true)}>Sign In</button>
      );
    }
  }

  renderHeader() {
    return (
      <ul>
        <li>
          <Link to="/"> Home </Link>
        </li>
        <li>
          <Link to="/post"> Post A Comment </Link>
        </li>
        <li>{this.renderButton()}</li>
      </ul>
    );
  }

  render() {
    console.log("props is", this.props);
    return (
      <div>
        {this.renderHeader()}
        <Route path="/post" component={CommentBox} />
        <Route path="/" exact component={CommentList} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

// function mapDispatchToProps(dispatch) {
//   return { changeAuth };
// }

export default connect(
  mapStateToProps,
  actions
)(App);
