// itemTransactionController.js
const itemTransactionModel = require('../models/itemTransactionModel');

module.exports = {
  createItemTransactionData: async function(req, res) {
    const { transaction_id, restaurant_id, item_id, quantity } = req.body;
    const result = await itemTransactionModel.createItemTransactionData(transaction_id, restaurant_id, item_id, quantity);
    res.send(result);
  },

  deleteItemTransactionData: async function(req, res) {
    const { transaction_id } = req.body;
    const result = await itemTransactionModel.deleteItemTransactionData(transaction_id);
    res.send(result);
  },

  getItemTransactionsData: async function(req, res) {
    const result = await itemTransactionModel.getItemTransactionsData();
    res.send(result);
  },

  updateItemTransactionData: async function(req, res){
    const { transaction_id, restaurant_id, item_id, quantity, old_id } = req.body;
    const result = await itemTransactionModel.updateItemTransactionData(transaction_id, restaurant_id, item_id, quantity, old_id);
    res.send(result)
  }
};
