const mongoose = require('mongoose');

const trackSchema = new mongoose.Schema({
  title: String,
  artist: String,
  genre: String,
  url: String,
});

module.exports = mongoose.model('Track', trackSchema);
