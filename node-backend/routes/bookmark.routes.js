const express = require('express');
const app = express();

const bookmarkRoute = express.Router();
let Bookmark = require('../model/Bookmark');

// Add Bookmark
bookmarkRoute.route('/add-bookmark').post((req, res, next) => {
    Bookmark.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get All Bookmark
bookmarkRoute.route('/bookmarks').get((req, res) => {
  Bookmark.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

module.exports = bookmarkRoute;