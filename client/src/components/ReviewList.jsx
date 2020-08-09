import React from 'react';

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   review: '',
    // };
    // this.pickProperty = this.pickProperty.bind(this);
  }

  componentDidMount() {
    // this.setState({review: this.props.reviews});
    console.log(this.props);
  }

  render() {
    if(!this.props.reviews) {
      return (
        <div>
          <div>
            <span>Avatar</span>
            <span>username</span>
            <span>Day Posted</span>
          </div>
          <div>Review...</div>
        </div>
      );
    } else {
      return (
        <div>
          <div>
            <span>
              <img src={this.props.reviews.avatar}/>
            </span>
            <span>{this.props.reviews.username}</span>
            <span>{this.props.reviews.dayPosted}</span>
          </div>
          <div>{this.props.reviews.review}</div>
        </div>
      );
    }
  }
}

export default ReviewList;
