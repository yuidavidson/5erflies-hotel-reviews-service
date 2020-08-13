import React from 'react';
// import React, { Fragment } from 'react';

class Ratings extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if(!this.props.averageRatings) {
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
    } else {
      return (
        <ul>
          <li>
            <span>Cleanliness</span>
            <span>-----------</span>
            <span>{this.props.averageRatings.cleanliness}</span>
          </li>
          <li>
            <span>Accuracy</span>
            <span>-----------</span>
            <span>{this.props.averageRatings.accuracy}</span>
          </li>
          <li>
            <span>Communication</span>
            <span>-----------</span>
            <span>{this.props.averageRatings.communication}</span>
          </li>
          <li>
            <span>Location</span>
            <span>-----------</span>
            <span>{this.props.averageRatings.location}</span>
          </li>
          <li>
            <span>Check-in</span>
            <span>-----------</span>
            <span>{this.props.averageRatings.checkIn}</span>
          </li>
          <li>
            <span>Value</span>
            <span>-----------</span>
            <span>{this.props.averageRatings.value}</span>
          </li>
        </ul>
      )
    }
  }
}

export default Ratings;
