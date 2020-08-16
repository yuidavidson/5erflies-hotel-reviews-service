import React from 'react';
import styled from 'styled-components';

import ReviewItem from './ReviewItem.jsx';

const ReviewsRow = styled.div`
  // display: flex;
  // flex-direction: row;
`;

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    //map over props.reviews and assign to review
    if (!this.props.reviews) {
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

      // TODO: working on idea on trying to set up two reviews per row for the review list
      // var recentSixReviews = [];
      // for (let i = 0; i < 6; i += 2) {
      //   const currentTwoReviews = [];
      //   currentTwoReviews.push(this.props.reviews[i])
      //   currentTwoReviews.push(this.props.reviews[i + 1]);
      //   recentSixReviews.push(currentTwoReviews);
      //   // console.log(currentTwoReviews);
      //   // console.log(recentSixReviews);
      //   console.log(recentSixReviews[0][0]);
      // }
      // // const toReact = (reviews) => {
      // //   for (let i = 0; i < reviews.length; i += 1) {

      // //   }
      // // }
      // // let review =
      // var review = recentSixReviews.map(
      //   review => {
      //     // <ReviewsRow>
      //       <ReviewItem key={review[0].reviewId} review={review[0]}/>
      //       {/* <ReviewItem key={review[1].reviewId} review={review[1]}/>
      //     </ReviewsRow> */}
      //   }
      // )
      // return (
      //   <div>{review}</div>
      // );

      // TODO: reuse for modal = true
      var recentSixReviews = [];
      for (let i = 0; i < 6; i += 1) {
        recentSixReviews.push(this.props.reviews[i]);
      }
      var review = recentSixReviews.map(
        review => <ReviewItem key={review.reviewId} review={review}/>
      )
      return (
        <div>{review}</div>
      );
    }
  }
}

export default ReviewList;
