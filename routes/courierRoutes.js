const express = require('express');
const router = express.Router();
const courierController = require('../controllers/courierController');

// Define your route
router.post('/create_courier', courierController.createCourierData);
router.delete('/delete_courier', courierController.deleteCourierData);
router.get('/show_courier', courierController.getCourierData);
router.put('/update_courier', courierController.updateCourierData);

module.exports = router;