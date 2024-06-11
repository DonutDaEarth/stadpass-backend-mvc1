// itemTransactionRoutes.js
const express = require('express');
const router = express.Router();
const itemTransactionController = require('../controllers/itemTransactionController');

// Define your route
router.post('/create_item_transaction', itemTransactionController.createItemTransactionData);
router.delete('/delete_item_transaction', itemTransactionController.deleteItemTransactionData);
router.get('/show_item_transaction', itemTransactionController.getItemTransactionsData);
router.put('/update_item_transaction', itemTransactionController.updateItemTransactionData);

module.exports = router;
