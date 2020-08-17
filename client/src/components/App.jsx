import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import TotalRating from './TotalRating.jsx';
import Ratings from './Ratings.jsx';
import ReviewList from './ReviewList.jsx';
import Modal from './Modal.jsx';

const query = window.location.search;
const ENDPOINT = `/reviews${query}`;

const AppStyle = styled.div`
  // overflow: ${props => props.show ? 'hidden' : 'auto'};
  // height: 1000px;
  // overflow: hidden;
`;

// what a bad name
const ModalLocation = styled.div`
  // display: ${props => props.show ? 'none' : 'block'};
  // display: none;
`;

const ModalOpenButton = styled.button`
  display: inline-block;
  position: relative;
  text-align: center;
  width: auto;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  padding-top: 13px;
  padding-bottom: 13px;
  padding-left: 23px;
  padding-right: 23px;
  border-radius: 8px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(34, 34, 34);
  background: rgb(255, 255, 255);
  &:hover {
    cursor: pointer;
    background-color: #d9d9d9;
  };
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: '',
      dataSet: false,
      totalRating: '',
      averageRatings: '',
      show: false,
    };
    this.getReviews = this.getReviews.bind(this);
    this.setData = this.setData.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    this.getReviews(this.setData);
  }

  getReviews(callback) {
    axios.get(ENDPOINT)
    .then(callback)
    .catch( (error) => {
      console.log(error);
    })
  }

  setData(data) {
    // adding together all ratings and diving each by the rating count
    // then round to nearest tenth

    const propertyReviews = [];
    let accuracy = 0;
    let checkIn = 0;
    let cleanliness = 0;
    let communication = 0;
    let location = 0;
    let value = 0;
    let reviewCount = 0;

    // TODO: can probably refactor this part and the assignment to state into the average function
    // and input all the correct propertyId's value into the arguments

    // TODO: need to add a .0 after any whole number

    for (let i = 0; i < data.data.length; i += 1) {
      reviewCount += 1;
      propertyReviews.push(data.data[i]);
      accuracy += data.data[i].rating.accuracy;
      checkIn += data.data[i].rating.checkIn;
      cleanliness += data.data[i].rating.cleanliness;
      communication += data.data[i].rating.communication;
      location += data.data[i].rating.location;
      value += data.data[i].rating.value;
    }

    const average = (...args) => {
      let newNum = 0;
      for (let i = 0; i < args.length; i += 1) {
        newNum += args[i];
      }
      if (args.length === 1) {
        newNum = (newNum * 10) / reviewCount;
      } else {
        newNum = (newNum * 10) / args.length;
      }
      const lastDigit = newNum.toString().split('').pop();
      if (lastDigit >= 5) {
        newNum = Math.ceil(newNum) / 10;
      } else {
        newNum = Math.floor(newNum) / 10;
      }
      return newNum;
    };

    accuracy = average(accuracy);
    checkIn = average(checkIn);
    cleanliness = average(cleanliness);
    communication = average(communication);
    location = average(location);
    value = average(value);
    const totalRating = average(accuracy, checkIn, cleanliness, communication, location, value);

    // takes a number (string) between 01 - 12 and returns a month
    const numberToMonth = (num) => {
      switch (num) {
        case '01':
          return 'January';
        case '02':
          return 'Febuary';
        case '03':
          return 'March';
        case '04':
          return 'April';
        case '05':
          return 'May';
        case '06':
          return 'June';
        case '07':
          return 'July';
        case '08':
          return 'August';
        case '09':
          return 'September';
        case '10':
          return 'October';
        case '11':
          return 'November';
        case '12':
          return 'December';
        default:
          console.log('Something went wrong with the date');
      }
    };

    // takes a number (string) and returns formatted 'Month Year'
    const numbersToDate = (num) => {
      const date = num;
      const year = date.slice(0, 4);
      const month = numberToMonth(date.slice(5, 7));
      return month.concat(' ', year);
    };
    console.log(propertyReviews);
    // assigns formatted dates to post/comment keys
    for (let i = 0; i < propertyReviews.length; i += 1) {
      propertyReviews[i].dayPosted = numbersToDate(propertyReviews[i].dayPosted);

      if (propertyReviews[i].response) {
        propertyReviews[i].response.dayCommented = numbersToDate(propertyReviews[i].response.dayCommented);
      }
    }

    this.setState({
      reviews: propertyReviews,
      dataSet: true,
      totalRating: {
        totalRating,
        reviewCount,
      },
      averageRatings: {
        accuracy,
        checkIn,
        cleanliness,
        communication,
        location,
        value,
      },
    });
  }

  openModal() {
    this.setState({ show: true });
  }

  closeModal() {
    this.setState({ show: false });
  }

  render() {
    if (this.state.dataSet !== true) {
      return (
        <div>
          <TotalRating />
          <Ratings />
          <ReviewList />
        </div>
      );
    }
    return (
      <div>
        {/* <AppStyle props={this.state.show}> */}
        <TotalRating totalRating={this.state.totalRating} show={this.state.show}/>

        {/* <StyledTotalRating totalRating={this.state.totalRating}> */}
        <Ratings averageRatings={this.state.averageRatings}/>
        <ReviewList reviews={this.state.reviews} />
        {<ModalOpenButton onClick={this.openModal}>Show all {this.state.totalRating.reviewCount} reviews</ModalOpenButton>}

        <>
        <Modal closeModal={this.closeModal} show={this.state.show} totalRating={this.state.totalRating} averageRatings={this.state.averageRatings} reviews={this.state.reviews}/>
        </>
        {/* </AppStyle> */}
      </div>
    );
  }
}

export default App;
