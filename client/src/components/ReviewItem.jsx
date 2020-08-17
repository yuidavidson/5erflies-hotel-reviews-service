import React from 'react';
import styled from 'styled-components';
// TODO: fix for testing, enzyme doesn't like that props.review
// does not exist at this point and automatically fails test

const ReviewItemFlex = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const UserInfoFlex = styled.div`
  display: flex;
  flex-direction: row;
`;

const UserAvatarFlex = styled.img`
  height: 60px;
  border-radius: 50%;
  padding: 7px;
  &:hover {
    cursor: pointer;
  };
`;

const UserInfoTextFlex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const UserNameFlex = styled.div`
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  padding: 3px;
`;

const DayPostedFlex = styled.div`
  color: grey;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  padding: 3px;
`;

const ReviewFlex = styled.div`
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  padding: 5px;
`;

const ButtonFlex = styled.span`
  font-weight: bold;
  text-decoration: underline;
  display: ${(props) => props.longReview ? 'block' : 'none'};
  &:hover {
    cursor: pointer;
  };
`;

const ResponseItemFlex = styled.div`
display: flex;
flex-direction: column;
padding-left: 50px;
`;

const HostInfoFlex = styled.div`
display: flex;
flex-direction: row;
`;

const HostAvatarFlex = styled.img`
height: 60px;
border-radius: 50%;
padding: 7px;
&:hover {
  cursor: pointer;
};
`;

const HostInfoTextFlex = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
`;

const HostNameFlex = styled.div`
font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
font-weight: 600;
font-size: 16px;
line-height: 20px;
padding: 3px;
`;

const ResponseDayPostedFlex = styled.div`
color: grey;
font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
font-weight: 400;
font-size: 14px;
line-height: 20px;
padding: 3px;
`;

const ResponseFlex = styled.div`
font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
font-weight: 400;
font-size: 16px;
line-height: 24px;
padding: 5px;
`;

const ResponseButtonFlex = styled.span`
font-weight: bold;
text-decoration: underline;
display: ${(props) => props.longResponse ? 'block' : 'none'};
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
      longResponse: false,
      shortResponse: '',
    };
    this.showLongReview = this.showLongReview.bind(this);
    this.showLongResponse = this.showLongResponse.bind(this);
    this.goToUserPage = this.goToUserPage.bind(this);
  }

  componentDidMount() {
    if (this.props.review.review.length > 180) {
      const shortReview = this.props.review.review.slice(0, 180) + '...';
      this.setState({ longReview: true, shortReview: shortReview });
    } else {
      this.setState({ shortReview: this.props.review.review});
    }
    if (this.props.review.response.response.length > 180) {
      const shortResponse = this.props.review.response.response.slice(0, 180) + '...';
      this.setState({ longResponse: true, shortResponse: shortResponse });
    } else {
      this.setState({ shortResponse: this.props.review.response.response});
    }
  }

  showLongReview() {
    this.setState({ longReview: false, shortReview: this.props.review.review});
  }

  showLongResponse() {
    this.setState({ longResponse: false, shortResponse: this.props.review.response.response});
  }

  goToUserPage() {
    alert("This button doesn't actually do anything because I didn't make a user page because that wasn't part of my role!");
  }

  render() {
    // tried to use inline logical operator but couldn't figure out how to make it work => perhaps refactor later
    if (this.props.show) {
      return(
      <div>
        <ReviewItemFlex>
          <UserInfoFlex>
            <UserAvatarFlex src={this.props.review.avatar} onClick={this.goToUserPage} />
            <UserInfoTextFlex>
              <UserNameFlex>{this.props.review.username}</UserNameFlex>
              <DayPostedFlex>{this.props.review.dayPosted}</DayPostedFlex>
            </UserInfoTextFlex>
          </UserInfoFlex>
          <ReviewFlex>
            {this.state.shortReview}<ButtonFlex longReview={this.state.longReview} onClick={this.showLongReview}>read more</ButtonFlex>
          </ReviewFlex>
        </ReviewItemFlex>
        <ResponseItemFlex>
          <HostInfoFlex>
            <HostAvatarFlex src={this.props.review.response.avatar} onClick={this.goToUserPage} />
            <HostInfoTextFlex>
              <HostNameFlex>{this.props.review.response.hostname}</HostNameFlex>
              <ResponseDayPostedFlex>{this.props.review.response.dayCommented}</ResponseDayPostedFlex>
            </HostInfoTextFlex>
          </HostInfoFlex>
          <ResponseFlex>
{this.state.shortResponse}<ResponseButtonFlex longResponse={this.state.longResponse} onClick={this.showLongResponse}>read more</ResponseButtonFlex>
          </ResponseFlex>
        </ResponseItemFlex>
      </div>
      );
    }
    return (
      <div>
        <ReviewItemFlex>
          <UserInfoFlex>
            <UserAvatarFlex src={this.props.review.avatar} onClick={this.goToUserPage} />
            <UserInfoTextFlex>
              <UserNameFlex>{this.props.review.username}</UserNameFlex>
              <DayPostedFlex>{this.props.review.dayPosted}</DayPostedFlex>
            </UserInfoTextFlex>
          </UserInfoFlex>
          <ReviewFlex>
            {this.state.shortReview}<ButtonFlex longReview={this.state.longReview} onClick={this.showLongReview}>read more</ButtonFlex>
          </ReviewFlex>
        </ReviewItemFlex>
      </div>
    );
  }
}

export default ReviewItem;
