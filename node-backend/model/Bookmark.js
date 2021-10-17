const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Bookmark = new Schema({
  url: {
    type: String
  },
}, {
  collection: 'bookmarks'
})

module.exports = mongoose.model('Bookmark', Bookmark)