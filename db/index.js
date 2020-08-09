const mongoose = require('mongoose');

const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/reviews');

// mongoose.Promise = global.Promise;

const Review = require('./model/reviews.js');

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', () => {
//   console.log('connected to db');
// });

// add a function for getting data
const getData = (callback) => {
  Review.find((err, data) => {
    if (err) {
      // console.log(err);
      // console.log('getData not working');
      callback(err, null);
    } else {
      // console.log(data);
      // console.log('getData working');
      callback(null, data);
    }
  });
};

module.exports.getData = getData;
