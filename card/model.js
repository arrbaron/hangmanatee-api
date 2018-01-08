const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const CardSchema = mongoose.Schema({
  term: String,
  definition: String
});

const Card = mongoose.model("Card", CardSchema);

module.exports = { Card, CardSchema };