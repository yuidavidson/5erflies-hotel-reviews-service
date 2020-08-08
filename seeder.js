const faker = require('faker');
// const MongoClient = require("mongodb").MongoClient;
const mongoose = require('mongoose');

// import Review model
const Review = require('./db/model/reviews.js');

mongoose.connect('mongodb://localhost/test');

const db = mongoose.connection;

const url = 'mongodb://localhost:27017/test';

// use npm run seed to seed database with 100 properties with 25-75 reviews each

// MongoClient.connect(url, function(err, client) {
mongoose.connect(url, (err) => {
  if (err) {
    console.log(err);
  } else {
    const seedReviews = () => {
      console.log('seeding started');
      db.dropDatabase();
      const reviews = [];
      for (let i = 0; i < 100; i += 1) {
        const property = faker.company.companyName();
        const reviewCount = Math.floor(Math.random() * 50) + 25;
        // console.log(reviewCount);
        // console.log(i);
        for (let j = 0; j < reviewCount; j += 1) {
          const review = new Review ({
            propertyName: property,
            username: faker.name.firstName(),
            avatar: faker.internet.avatar(),
            review: faker.lorem.paragraph(),
            dayPosted: faker.date.past(),
            rating: {
              cleanliness: faker.random.number({ min: 0, max: 5 }),
              communication: faker.random.number({ min: 0, max: 5 }),
              accuracy: faker.random.number({ min: 0, max: 5 }),
              checkIn: faker.random.number({ min: 0, max: 5 }),
              location: faker.random.number({ min: 0, max: 5 }),
              value: faker.random.number({ min: 0, max: 5 }),
            },
            response: {
              hostname: faker.name.firstName(),
              avatar: faker.internet.avatar(),
              response: faker.lorem.sentences(),
              dayCommented: faker.date.past(),
            },
          });
          reviews.push(review);
          review.save();
        }
      }
      console.log('seeding done');
    };
    seedReviews();
  }
});

// babe-preset-env?

// add faker
// mongodb
// seeder: 'node seeder.js'
