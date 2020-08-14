import React from 'react';

// TODO: fix for testing, enzyme doesn't like that props.review
// does not exist at this point and automatically fails test

// function ReviewItem(props) {
//   if (!props.reviews) {
//     return (
//       <li>
//         <div>
//           <div>
//             <span>
//               <img/>
//             </span>
//             <span>username</span>
//             <span>dayPosted</span>
//           </div>
//           <div>review</div>
//         </div>
//       </li>
//     );
//   } else {
//     return (
//       <li>
//         <div>
//           <div>
//             <span>
//               <img src={props.review.avatar}/>
//             </span>
//             <span>{props.review.username}</span>
//             <span>{props.review.dayPosted}</span>
//           </div>
//           <div>{props.review.review}</div>
//         </div>
//       </li>
//     );
//   }
// };

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
