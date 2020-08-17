import React from 'react';
import styled from 'styled-components';

import ReviewItem from './ReviewItem.jsx';

const ReviewsRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ReviewColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Review0 = styled.div`
  flex: 1;
`;

const Review1 = styled.div`
  flex: 1;
`;

const Review2 = styled.div`
  flex: 1;
`;

const Review3 = styled.div`
  flex: 1;
`;

const Review4 = styled.div`
  flex: 1;
`;

const Review5 = styled.div`
  flex: 1;
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
    } else if (this.props.show) {


      let shownReviews = 6;
      if (this.props.show) {
        shownReviews = this.props.reviews.length;
      }
      // TODO: reuse for modal = true
      var allReviews = [];
      for (let i = 0; i < shownReviews; i += 1) {
        allReviews.push(this.props.reviews[i]);
      }
      var review = allReviews.map(
        review => <ReviewItem key={review.reviewId} review={review} show={this.props.show} />
        )
        return (
          <div>{review}</div>
          );
        }

        const recentSixReviews = [];
        for (var i = 0; i < 6; i += 1) {
          recentSixReviews.push(this.props.reviews[i]);
        }

        return(
          <ReviewColumn>
            <ReviewsRow>
              <Review0>
                <ReviewItem review={recentSixReviews[0]} />
              </Review0>
              <Review1>
                <ReviewItem review={recentSixReviews[1]} />
              </Review1>
            </ReviewsRow>
            <ReviewsRow>
              <Review2>
                <ReviewItem review={recentSixReviews[2]} />
              </Review2>
              <Review3>
                <ReviewItem review={recentSixReviews[3]} />
              </Review3>
            </ReviewsRow>
            <ReviewsRow>
              <Review4>
                <ReviewItem review={recentSixReviews[4]} />
              </Review4>
              <Review5>
                <ReviewItem review={recentSixReviews[5]} />
              </Review5>
            </ReviewsRow>
          </ReviewColumn>
          // <ReviewsRow>
          //   <ReviewColumn>
          //     <ReviewItem review={recentSixReviews[0]} />
          //     <ReviewItem review={recentSixReviews[2]} />
          //     <ReviewItem review={recentSixReviews[4]} />
          //   </ReviewColumn>
          //   <ReviewColumn>
          //     <ReviewItem review={recentSixReviews[1]} />
          //     <ReviewItem review={recentSixReviews[3]} />
          //     <ReviewItem review={recentSixReviews[5]} />
          //   </ReviewColumn>
          // </ReviewsRow>
        );

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
  }
}

export default ReviewList;
