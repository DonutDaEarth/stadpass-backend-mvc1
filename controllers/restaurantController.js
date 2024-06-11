// restaurantController.js
const restaurantModel = require('../models/restaurantModel');

module.exports = {
  createRestaurantData: async function(req, res) {
    const { restaurant_name, restaurant_picture } = req.body;
    const result = await restaurantModel.createRestaurantData(restaurant_name, restaurant_picture);
    res.send(result);
  },

  deleteRestaurantData: async function(req, res){
    const { restaurant_id } = req.body;
    const result = await restaurantModel.deleteRestaurantData(restaurant_id);
    res.send(result);
  },

  getRestaurantData: async function(req, res) {
    const result = await restaurantModel.getRestaurantData();
    res.send(result);
  },

  updateRestaurantData: async function(req, res){
    const { restaurant_id, restaurant_name, restaurant_picture } = req.body;
    const result = await restaurantModel.updateRestaurantData(restaurant_id, restaurant_name, restaurant_picture);
    res.send(result)
  }
};
