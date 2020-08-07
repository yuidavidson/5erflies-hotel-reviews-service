const express = require('express');
let app = express();

// const seeder = require('../seeder.js');
// const saveData = require('../db/reviews.js');
const Review = require('../db/model/reviews.js');

const ENDPOINT = '/test';
const PORT = 3010;

app.use(express.static(__dirname + '/../client/dist'));

app.use(express.json());

//post request of fake data

app.post(ENDPOINT, function (req, res) {

  console.log('post working!');
  console.log(req.body);
  console.log(res.body);
  Review.seedReviews();
//   Review.seedReviews((err, data) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(data);
//     }
//   });
});

app.listen(PORT, function() {
  console.log(`listening on port ${PORT}`);
});