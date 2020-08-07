const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const faker = require('faker');

mongoose.connect('mongodb://localhost/test');// { useMongoClient: true }

mongoose.Promise = global.Promise;

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected to db');
});

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
// var review = mongoose.model( name: review, reviewSchema, collection 'Review');

// module.exports.Review = Review;

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

const seedReviews = (callback) => {
  db.dropDatabase();
  var reviews = [];
  for (var i = 0; i < 10; i++) {
    var review = new Review ({
      propertyName: faker.company.companyName(),
      username: faker.name.firstName(),
      avatar: faker.internet.avatar(),
      review: faker.lorem.paragraph(),
      dayPosted: faker.date.past(),
      rating: {
        cleanliness: faker.random.number({min: 0, max: 5}),
        communication: faker.random.number({min: 0, max: 5}),
        accuracy: faker.random.number({min: 0, max: 5}),
        checkIn: faker.random.number({min: 0, max: 5}),
        location: faker.random.number({min: 0, max: 5}),
        value: faker.random.number({min: 0, max: 5})
      },
      response: {
        hostname: faker.name.firstName(),
        avatar: faker.internet.avatar(),
        response: faker.lorem.sentences(),
        dayCommented: faker.date.past()
      }
    });
    reviews.push(review);
    review.save();
  }
  // saveData(reviews);
  callback(null, reviews);
};
module.exports.seedReviews = seedReviews;
