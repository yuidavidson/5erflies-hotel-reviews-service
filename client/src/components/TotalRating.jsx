import React from 'react';
import styled from 'styled-components';
import star from './star.png';

const Wrapper = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding-top: 25px;
padding-bottom: 10px;
`;
const StarFlex = styled.img`
  padding: 5px;
`;

const TotalRatingFlex = styled.div`
  padding: 5px;
  font-size: 22px;font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  // font-size: ${props => props.show ? '50px' : '10px'};
  font-weight: bold;
`;

const ReviewCountFlex = styled.div`
  padding: 5px;
  font-size: 22px;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  font-weight: bold;
`;

class TotalRating extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.totalRating) {
      return (
        <div>
          <span>Star</span>
          <span>Average Rating</span>
          <span>Total Ratings</span>
        </div>
      )
    } else {
      return (
        <div>
        <Wrapper>
          {/* <span> */}
            <StarFlex src='https://5erflies-reviews-icon.s3-us-west-1.amazonaws.com/rating-star-icon-14-16.png'/>
          {/* </span> */}
          <TotalRatingFlex show={this.props.show}>{this.props.totalRating.totalRating}</TotalRatingFlex>
          <ReviewCountFlex>({this.props.totalRating.reviewCount} reviews)</ReviewCountFlex>
        </Wrapper>
        </div>
      )
    }
  }
}

// const AverageRating = styled.span`
//   color: green;
// `;

// const TotalRating = (totalRating) => (
//   <div>
//     <span>Star</span>
//     <span>Average Rating</span>
//     <span>Total Ratings</span>
//   </div>
// );

// const StyledTotalRating = styled(TotalRating)`
//   font-color: green;
//   font-weight: bold;
// `;

// render(
//   <StyledTotalRating />,
// );

export default TotalRating;

// export default StyledTotalRating;
