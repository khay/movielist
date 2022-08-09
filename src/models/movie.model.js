const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  synopsis: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  productionYear: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("MOVIE", movieSchema);
