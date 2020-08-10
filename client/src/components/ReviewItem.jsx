import React from 'react';

const ReviewItem = (props) => (
  <li>
    <div>
      <div>
        <span>
          <img src={props.review.avatar}/>
        </span>
        <span>{props.review.username}</span>
        <span>{props.review.dayPosted}</span>
      </div>
      <div>{props.review.review}</div>
    </div>
  </li>
);

export default ReviewItem;
