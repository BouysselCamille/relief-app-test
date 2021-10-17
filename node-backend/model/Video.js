const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Video = new Schema({
  url: {
    type: String
  },
}, {
  collection: 'videos'
})

module.exports = mongoose.model('Video', Video)