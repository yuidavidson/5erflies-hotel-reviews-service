const express = require('express');
let app = express();

// const seeder = require('../seeder.js');
const Review = require('../db/model/reviews.js');

const ENDPOINT = '/test';
const PORT = 3010;

app.use(express.static(__dirname + '/../client/dist'));

app.use(express.json());

//post request of fake data
// app.post(ENDPOINT, function (req, res) {

//   Review.seedReviews((err, data) => {
//     if (err) {
//       console.log(err);
//       res.sendStatus(500).send(err);
//     } else {
//       console.log(data);
//       res.sendStatus(200);
//     }
//   });
// });

app.listen(PORT, function() {
  console.log(`listening on port ${PORT}`);
});