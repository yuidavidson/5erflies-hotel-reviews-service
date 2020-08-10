import React from 'react';

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if(!this.props.reviews) {
      return (
        <div>
          <div>
            <span>Avatar</span>
            <span>username</span>
            <span>Day Posted</span>
          </div>
          <div>Review...</div>
        </div>
      );
    } else {
      return (
        <div>
          <div>
            <span>
              <img src={this.props.reviews[0].avatar}/>
            </span>
            <span>{this.props.reviews[0].username}</span>
            <span>{this.props.reviews[0].dayPosted}</span>
          </div>
          <div>{this.props.reviews[0].review}</div>
        </div>
      );
    }
  }
}

export default ReviewList;
