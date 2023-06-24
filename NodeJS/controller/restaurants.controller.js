const RestaurantModel = require("../model/restaurants.model");

exports.create = (req, res) => {
  const {
    name,
    cuisines,
    starRating,
    imageUrl,
    locality,
    areaName,
    costForTwo,
    avgRating,
  } = req.body;

  const newRestaurant = new RestaurantModel({
    name,
    cuisines,
    starRating,
    imageUrl,
    locality,
    areaName,
    costForTwo,
    avgRating,
  });

  newRestaurant
    .save()
    .then((data) => {
      if (!data) {
        res.status(400).send({ message: "Something went wrong" });
      }

      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: "Server not available" });
    });
};

exports.fetch = (req, res) => {
  RestaurantModel.find()
    .then((data) => {
      if (!data) {
        res.status(400).send({ message: "Something went wrong" });
      }

      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: "Server not available" });
    });
};

exports.fetchOne = (req, res) => {
  var _id = req.params.id;

  RestaurantModel.findById(_id)
    .then((data) => {
      if (!data) {
        res.status(400).send({ message: "Something went wrong" });
      }

      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: "Server not available" });
    });
};

exports.updateOne = (req, res) => {
  const _id = req.params.id;

  RestaurantModel.findByIdAndUpdate(_id, { starRating: "4.4" })
    .then((data) => {
      if (!data) {
        res.status(400).send({ message: "Something went wrong" });
      }

      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: "Server not available" });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  RestaurantModel.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res.status(400).send({ message: "Something went wrong" });
      }
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: err });
    });
};
