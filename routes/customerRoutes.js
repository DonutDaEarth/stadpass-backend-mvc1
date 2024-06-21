// customerRoutes.js
const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');

// Define your route
router.post('/create_customer', customerController.createCustomerData);
router.delete('/delete_customer', customerController.deleteCustomerData);
router.get('/show_customer', customerController.getCustomerData);
router.put('/update_customer', customerController.updateCustomerData);

module.exports = router;