const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const faker = require('faker');

mongoose.connect('mongodb://localhost/test');

// mongoose.Promise = global.Promise;

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected to db');
});

//schema for reviews

var reviewSchema = new mongoose.Schema({
  propertyName: String,
  username: String,
  avatar: String,
  review: String,
  dayPosted: Date,
  rating: {
    cleanliness: Number,
    communication: Number,
    accuracy: Number,
    checkIn: Number,
    location: Number,
    value: Number
  },
  response: {
    hostname: String,
    avatar: String,
    response: String,
    dayCommented: Date
  }
});

var Review = mongoose.model('Review', reviewSchema);

module.exports = Review;

//probably want to use saveData for when we get to backend side

// var saveData = (data) => {
//   // console.log('getting to saveData');
//   // console.log(data);
//   for (var i = 0; i < data.length; i++) {
//     var review = new Review({
//       username: data[i].username
//     });
//     // console.log('getting to iteration');
//     review.save();
//   }
// };

// module.exports.saveData = saveData;
