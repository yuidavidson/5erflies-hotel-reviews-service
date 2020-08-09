import React from 'react';

class TotalRating extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <span>Star</span>
        <span>Total Ratings</span>
        <span>Average Rating</span>
      </div>
    )
  }
}

export default TotalRating;
