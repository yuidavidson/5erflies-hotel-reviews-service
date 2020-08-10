import React from 'react';

import ReviewItem from './ReviewItem.jsx';

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    //map over props.reviews and assign to review
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
      var review = this.props.reviews.map(
        review => <ReviewItem key={review.reviewId} review={review}/>
      )
      return (
        <ul>{review}</ul>
      );
    }
  }
}

export default ReviewList;
