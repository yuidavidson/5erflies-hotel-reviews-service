const express = require('express');

const app = express();

// const seeder = require('../seeder.js');
// const Review = require('../db/model/reviews.js');

const db = require('../db/index.js');

const ENDPOINT = '/reviews';
// const ENDPOINT = '/';
const PORT = 3011;

app.use(express.static(__dirname + '/../client/dist'));

app.use(express.json());

// create get request for the fake data
// TODO: currently getting all properties data => eventually want to be getting only the data
// of property which we are looking at.
app.get(ENDPOINT, (req, res) => {
  db.getData(req.query, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      console.log('Get/getData working!');
      res.status(200).send(data);
    }
  });
});

// app.get('/', function(req, res){
//   res.send('id: ' + req.query.id);
// });

// post request of fake data
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

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`listening on port ${PORT}`);
  }
});
