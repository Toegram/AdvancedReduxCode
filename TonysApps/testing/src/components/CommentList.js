import React, { Component } from 'react';

class CommentList extends Component {
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
    //TODO
    //call an action creater to save the comment
    this.setState({ comment: '' })
  }

  render() {
    return (
      <div>
        <form onSubmit={() => this.handleSubmit}>
          <h4>
            Add a Comment! </h4>
          <textarea
            onChange={this.handleChange}
            value={this.value}
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

export default CommentList
