const faker = require('faker');
// const MongoClient = require("mongodb").MongoClient;

//import Review model
const Review = require('./db/model/reviews.js');

//do we need it to be async?
const seedReviews = () => {
  // if (err) {
  //   console.log(err);
  // } else {
    var reviews = [];
    for (var i = 0; i < 10; i++) {
      var review = new Review.Review ({
        username: faker.name.firstName()
        reviews.push(review);
      });
    }
    Review.saveData(review);
    // reviews.forEach(review => {
    //   saveData.saveData(review);
    // });
  // }
};

module.exports.seedReviews = seedReviews;

// const url = "mongodb://localhost:27017/test";

// const dbName = "Review";

//prob need to make asynchronous
// export const seedReviews = () => {
//   try {
//     var reviews = [];
//     for (var i = 0; i < 10; i++) {
//       var review = new Review ({
//         username: faker.name.firstName(),
//       });
//     }
//     reviews.forEach(review => {
//       Review.create(review);
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

// seedReviews();

// Use connect method to connect to the server
// MongoClient.connect(url, function(err, client) {
//   if (err) {
//     console.log(err);
//   } else {
//     const db = client.db(dbName);
//     const usersCollection = db.collection("reviews");
//     let reviews = [];
//     for (let i = 0; i < 100; i += 1) {
//       let newReview = {
//         propertyName: faker.company.companyName(),
//         username: faker.name.firstName(),
//         avatar: faker.internet.avatar(),
//         review: faker.hacker.phrase(),
//         dayPosted: faker.data.past(),
//         rating: {
//           cleanliness: faker.random.number({min: 0, max: 5}),
//           communication: faker.random.number({min: 0, max: 5}),
//           accuracy: faker.random.number({min: 0, max: 5}),
//           checkIn: faker.random.number({min: 0, max: 5}),
//           location: faker.random.number({min: 0, max: 5}),
//           value: faker.random.number({min: 0, max: 5})
//         },
//         response: {
//           hostname: faker.name.firstName(),
//           avatar: faker.internet.avatar(),
//           response: faker.hacker.phrase(),
//           dayCommented: faker.data.past()
//         }
//       };
//       reviews.push(newReview);

//     }
//     console.log(reviews);
//     postsCollection.insertMany(reviews);
//     console.log("Database seeded! :)");
//   }
//   client.close();
// });

//babe-preset-env?

//add faker
//mongodb
    // seeder: 'node seeder.js'