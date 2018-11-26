import React, { Component } from "react";
import { connect } from "react-redux";

export default ChildComponent => {
  class ComposedComponent extends Component {
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
    render() {
      return <ChildComponent />;
    }
  }

  function mapStateToProps(state) {
    return { auth: state.auth };
  }

  return connect(mapStateToProps)(ComposedComponent);
};
