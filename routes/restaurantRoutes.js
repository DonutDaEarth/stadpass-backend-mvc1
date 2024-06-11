// restaurantRoutes.js
const express = require('express');
const router = express.Router();
const restaurantController = require('../controllers/restaurantController');

// Define your route
router.post('/create_restaurant', restaurantController.createRestaurantData);
router.delete('/delete_restaurant', restaurantController.deleteRestaurantData);
router.get('/show_restaurant', restaurantController.getRestaurantData);
router.put('/update_restaurant', restaurantController.updateRestaurantData);

module.exports = router;
