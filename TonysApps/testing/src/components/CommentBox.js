import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class CommentBox extends Component {
  state = { comment: "" };

  //our component gets rendered
  componentDidMount() {
    this.shouldNavAway();
  }

  //our component recieved new props and updates
  componentDidUpdate() {
    this.shouldNavAway();
  }

  shouldNavAway() {
    if (!this.props.auth) {
      //props.history comes from React Router
      this.props.history.push("/");
    }
  }

  handleChange = e => {
    this.setState({ comment: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.saveComment(this.state.comment);
    this.setState({ comment: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h4> Add a Comment! </h4>
          <textarea onChange={this.handleChange} value={this.state.comment} />
          <div>
            <button>Submit Comment</button>
          </div>
        </form>
        <button className="fetch-comments" onClick={this.props.fetchComments}>
          {" "}
          Fetch Comments{" "}
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(
  mapStateToProps,
  actions
)(CommentBox);
