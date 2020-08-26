const express = require('express');

const app = express();

const db = require('../db/index.js');

const ENDPOINT = '/reviews';
// const ENDPOINT = '/';
const PORT = 3002;

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

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`listening on port ${PORT}`);
  }
});
