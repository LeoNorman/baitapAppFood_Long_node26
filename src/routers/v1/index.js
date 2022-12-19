// Routers V1
const express = require("express");
const userController = require("../../controllers/user.controller");
const restaurantController = require("../../controllers/restaurant.controller");
const authController = require("../../controllers/auth.controller");

// path v1: /api/v1
const v1 = express.Router();

// Định nghĩa các routers cho users
v1.get("/users", userController.getUsers());
v1.get("/users/:id", userController.getUserByID());
v1.post("/users", userController.createUser());
v1.put("/users/:id", userController.updateUser());
v1.delete("/users/:id", userController.deleteUser());

// Định nghĩa các routers cho restaurants
v1.get("/restaurantLikesByUserId/:userId", restaurantController.getRestaurantLikesbyUserId());
v1.get("/getRestaurantLikesByRestaurantId/:restaurantId", restaurantController.getRestaurantLikesByRestaurantId());
v1.get("/getRestaurantRatesByRestaurantId/:restaurantId", restaurantController.getRestaurantRatesbyRestaurantId())
v1.get("/restaurantRatesByUserId/:userId", restaurantController.getRestaurantRatesByUserId());

v1.post(
  "/restaurants/:restaurantId/like",
  restaurantController.likeRestaurant()
);
v1.delete("/restaurants/:restaurantId/unLike", restaurantController.unLikeRestaurant())

// Đánh giá nhà hàng
v1.post("/restaurants/:restaurantId/rate", restaurantController.rateRestaurant())

// Định nghĩa các routers cho foods

// Định nghĩa các routers cho auth
v1.post("/login", authController.login());

module.exports = v1;
