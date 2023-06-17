const mongoose = require("mongoose");

const restaurantSchema = mongoose.Schema({
  name: String,
  cuisines: Array,
  starRating: String,
  imageUrl: String,
});

const restaurantModel = mongoose.model("Restaurant", restaurantSchema);

module.exports = restaurantModel;
