import React from 'react';
import axios from 'axios';
import TotalRating from './TotalRating.jsx';
import Ratings from './Ratings.jsx';
import ReviewList from './ReviewList.jsx';

const ENDPOINT = '/reviews';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: '',
      dataSet: false,
    };
    this.getReviews = this.getReviews.bind(this);
    this.setData = this.setData.bind(this);
  }


  // using axios for get request
  // axios.get('')
  // .then(function (response) {
  //   // handle success
  //   console.log(response);
  // })
  // .catch(function (error) {
  //   // handle error
  //   console.log(error);
  // })

  componentDidMount() {
    console.log('component properly mounting');
    this.getReviews(this.setData);
  }

  getReviews(callback) {
    console.log('getReviews working');
    axios.get(ENDPOINT)
    //   .then( (response) => {
    //   console.log(response);
    // })
    .then(callback)
    // .then(console.log('something is working'))
    .catch( (error) => {
      console.log(error);
    })
  }

  setData(data) {
    console.log('setData working');
    this.setState({ reviews: data.data[0], dataSet: true });
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
    } else {
      return (
        <div>
          <TotalRating />
          <Ratings />
          <ReviewList reviews={this.state.reviews} />
        </div>
      )
    }
  }
}

// const App = () => (
//   <div>React Rendering</div>
// );

export default App;
