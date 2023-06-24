const mongoose = require("mongoose");

const restaurantSchema = mongoose.Schema({
  name: String,
  cuisines: Array,
  starRating: String,
  imageUrl: String,
  locality: String,
  areaName: String,
  costForTwo: String,
  avgRating: Number,
});

const restaurantModel = mongoose.model("Restaurant", restaurantSchema);

module.exports = restaurantModel;

//React Query   ----> fetch data from api
