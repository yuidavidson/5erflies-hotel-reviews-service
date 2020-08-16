import React from 'react';
import styled from 'styled-components';
import star from './star.png';

const Wrapper = styled.div`
  boarder-radius: 50px;
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
          <span>
            <img src={star} alt='red star'/>
          </span>
          <span>{this.props.totalRating.totalRating}</span>
          <span>({this.props.totalRating.reviewCount} reviews)</span>
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
