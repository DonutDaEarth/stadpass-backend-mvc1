// itemController.js
const itemModel = require('../models/itemModel');

module.exports = {
  createItemData: async function(req, res) {
    const { item, price, item_picture, restaurant_id } = req.body;
    const result = await itemModel.createItemData(item, price, item_picture, restaurant_id);
    res.send(result);
  },

  deleteItemData: async function(req, res) {
    const { item_id } = req.body;
    const result = await itemModel.deleteItemData(item_id);
    res.send(result);
  },

  getItemData: async function(req, res) {
    const result = await itemModel.getItemData();
    res.send(result);
  },

  updateItemData: async function(req, res) {
    const { item_id, item, price, item_picture, restaurant_id } = req.body;
    const result = await itemModel.updateItemData(item_id, item, price, item_picture, restaurant_id);
    res.send(result)
  }
};