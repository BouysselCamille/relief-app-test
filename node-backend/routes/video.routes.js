const express = require('express');
const app = express();

const videoRoute = express.Router();
let Video = require('../model/Video');

// Add Video
videoRoute.route('/add-video').post((req, res, next) => {
    Video.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get All Video
videoRoute.route('/').get((req, res) => {
    Video.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

module.exports = videoRoute;