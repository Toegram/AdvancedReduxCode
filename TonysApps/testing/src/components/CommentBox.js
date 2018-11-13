import React, { Component } from 'react';

class CommentBox extends Component {
  // constructor(){
  //   super()

    // this.state = { comment: '' }

  // }

  state = {comment: ''}

  handleChange = (e) => {
    this.setState({ comment: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ comment: '' });
  };

  render() {
    return (
      <div>
          <form onSubmit={this.handleSubmit}>
          <h4>
            Add a Comment! </h4>
          <textarea
            onChange={this.handleChange}
            value={this.state.comment}
              />
          <div>
            <button>
              Submit Comment
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default CommentBox
