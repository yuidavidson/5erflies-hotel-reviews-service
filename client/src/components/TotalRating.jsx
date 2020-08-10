import React from 'react';

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
          <span>Star</span>
          <span>{this.props.totalRating.totalRating}</span>
          <span>({this.props.totalRating.reviewCount} reviews)</span>
        </div>
      )
    }
  }
}

export default TotalRating;
