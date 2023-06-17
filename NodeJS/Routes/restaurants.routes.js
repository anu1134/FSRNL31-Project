const restaurantController = require("../controller/restaurants.controller");
const jwtAuth = require("../middleware/authJWT");

module.exports = (app) => {
  app.post("/api/restaurants", restaurantController.create);
  app.get("/api/restaurants", jwtAuth, restaurantController.fetch);
  app.get("/api/restaurants/:id", restaurantController.fetchOne);
  app.put("/api/restaurants/:id", restaurantController.updateOne);
  app.delete("/api/restaurants/:id", restaurantController.delete);
};
