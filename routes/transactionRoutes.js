// transactionRoutes.js
const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController');

// Define your route
router.post('/create_transaction', transactionController.createTransactionData);
router.delete('/delete_transaction', transactionController.deleteTransactionData);
router.get('/show_transaction', transactionController.getTransactionData);
router.put('/update_transaction', transactionController.updateTransactionData);


module.exports = router;
