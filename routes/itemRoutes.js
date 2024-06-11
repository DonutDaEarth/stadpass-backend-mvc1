// itemRoutes.js
const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

// Define your route
router.post('/create_item', itemController.createItemData);
router.delete('/delete_item', itemController.deleteItemData);
router.get('/show_item', itemController.getItemData);
router.put('/update_item', itemController.updateItemData);

module.exports = router;
