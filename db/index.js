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
// const getData = (req, callback) => {
//   Review.find({ propertyId: req.propertyId }, (err, data) => {
//     if (err) {
//       callback(err, null);
//     } else {
//       callback(null, data);
//     }
//   });
// };

const getData = (req, callback) => {
  Review.find({ propertyId: req.propertyId })
    .sort({ dayPosted: -1 })
    .exec((err, data) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, data);
      }
    });
};

module.exports.getData = getData;
