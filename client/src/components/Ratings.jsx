import React from 'react';

class Ratings extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        <li>
          <span>Cleanliness</span>
          <span>-----------</span>
          <span>Rating Number</span>
        </li>
        <li>
          <span>Accuracy</span>
          <span>-----------</span>
          <span>Rating Number</span>
        </li>
        <li>
          <span>Communication</span>
          <span>-----------</span>
          <span>Rating Number</span>
        </li>
        <li>
          <span>Location</span>
          <span>-----------</span>
          <span>Rating Number</span>
        </li>
        <li>
          <span>Check-in</span>
          <span>-----------</span>
          <span>Rating Number</span>
        </li>
        <li>
          <span>Value</span>
          <span>-----------</span>
          <span>Rating Number</span>
        </li>
      </ul>
    )
  }
}

export default Ratings;
