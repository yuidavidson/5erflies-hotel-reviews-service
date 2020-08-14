import React from 'react';
import axios from 'axios';
import TotalRating from './TotalRating.jsx';
import Ratings from './Ratings.jsx';
import ReviewList from './ReviewList.jsx';
import Button from './Button.jsx';
import Modal from './Modal.jsx';
// import Child from './Child.jsx';

// const appRoot = document.getElementById('app-root');
// const modalRoot = document.getElementById('modal-root');

const query = window.location.search;
const ENDPOINT = `/reviews${query}`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: '',
      dataSet: false,
      totalRating: '',
      averageRatings: '',
      buttonClicked: false,
      show: false,
    };
    this.getReviews = this.getReviews.bind(this);
    this.setData = this.setData.bind(this);
    // this.handleClick = this.handleClick.bind(this);
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
    // console.log(data);
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

  // handleClick() {
  //   console.log('button was clicked!');
  //   // this.setState({buttonClicked: true});
  //   this.setState({ openModal: true });
  // }

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
    // } else if (this.state.openModal === true) {
    //   return (

    //   )
    }
    return (
      <div>
        <TotalRating totalRating={this.state.totalRating}/>
        <Ratings averageRatings={this.state.averageRatings}/>
        <ReviewList reviews={this.state.reviews} />
        {/* <Button totalRating={this.state.totalRating} handleClick={this.handleClick} /> */}
        <h1>Modal Time!</h1>
        {<button onClick={this.openModal}>Show modal</button>}
        <Modal closeModal={this.closeModal} show={this.state.show}/>
      </div>
    );
  }
}

export default App;
