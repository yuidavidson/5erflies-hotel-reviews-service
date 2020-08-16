import React from 'react';
import styled from 'styled-components';
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

const ReviewItemFlex = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserInfoFlex = styled.div`
  display: flex;
  flex-direction: row;
`;

const UserAvatarFlex = styled.img`
  height: 60px;
  border-radius: 50%;
  &:hover {
    cursor: pointer;
  };
`;

const UserTextFlex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const UserNameFlex = styled.div`
  font-weight: bold;
`;

const DayPostedFlex = styled.div`
  color: grey;
`;

const ReviewFlex = styled.div``;

const ButtonFlex = styled.p`
  font-weight: bold;
  text-decoration: underline;
  display: ${(props) => props.longReview ? 'block' : 'none'};
  &:hover {
    cursor: pointer;
  };
`;

class ReviewItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // maybe change the name of these becuase they are misleading
      longReview: false,
      shortReview: '',
    };
    this.showLongReview = this.showLongReview.bind(this);
    this.goToUserPage = this.goToUserPage.bind(this);
  }

  componentDidMount() {
    if (this.props.review.review.length > 180) {
      const shortReview = this.props.review.review.slice(0, 180) + '...';
      this.setState({ longReview: true, shortReview: shortReview });
    } else {
      this.setState({ shortReview: this.props.review.review});
    }
  }

  showLongReview() {
    this.setState({ longReview: false, shortReview: this.props.review.review});
  }

  goToUserPage() {
    alert("THis button doesn't actually do anything because I didn't make a user page because that wasn't part of my role!");
  }

  render() {
    return (
      <ReviewItemFlex>
        <UserInfoFlex>
          <UserAvatarFlex src={this.props.review.avatar} onClick={this.goToUserPage}/>
          <UserTextFlex>
            <UserNameFlex>{this.props.review.username}</UserNameFlex>
            <DayPostedFlex>{this.props.review.dayPosted}</DayPostedFlex>
          </UserTextFlex>
        </UserInfoFlex>
        {/* TODO: need to somehow make the button and the review on the same line */}
        <ReviewFlex>
          {this.state.shortReview}
          <ButtonFlex longReview={this.state.longReview} onClick={this.showLongReview}>read more</ButtonFlex>
          </ReviewFlex>
      </ReviewItemFlex>
    )
  }
};

export default ReviewItem;
