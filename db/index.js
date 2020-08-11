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

// Review.find({propertyId: id}, (err,data))
// add a function for getting data
const getData = (req, callback) => {
  Review.find({ propertyId: req.propertyId }, (err, data) => {
    if (err) {
      // console.log(err);
      // console.log('getData not working');
      callback(err, null);
    } else {
      // console.log(req);
      // console.log(req.propertyId);
      // console.log(data);
      // console.log('getData working');
      // const propertyData = [];
      // for (let i = 0; i < data.length; i += 1) {
      //   // console.log(data[i].propertyId);
      //   // console.log(data[i]);
      //   console.log(req.propertyId);
      //   if (data[i].propertyId === req.propertyId) {
      //     // console.log('hi');
      //     // propertyData.push(data[i]);
      //   }
      //   // console.log(propertyData);
      // }
      // console.log(propertyData);
      callback(null, data);
    }
  });
};

module.exports.getData = getData;
