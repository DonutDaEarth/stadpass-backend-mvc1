// transactionController.js
const transactionModel = require('../models/transactionModel');

module.exports = {
  createTransactionData: async function(req, res) {
    const { total_price, tax, discount, total_price_after, customer_id, courier_id, order_status } = req.body;
    const result = await transactionModel.createTransactionData(total_price, tax, discount, total_price_after, customer_id, courier_id, order_status);
    res.send(result);
  },

  deleteTransactionData: async function(req, res) {
    const { transaction_id } = req.body;
    const result = await transactionModel.deleteTransactionData(transaction_id);
    res.send(result);
  },

  getTransactionData: async function(req, res) {
    const result = await transactionModel.getTransactionData();
    res.send(result);
  },

  updateTransactionData: async function(req, res){
    const { transaction_id, total_price, tax, discount, total_price_after, customer_id, courier_id, order_status } = req.body;
    const result = await transactionModel.updateTransactionData(transaction_id, total_price, tax, discount, total_price_after, customer_id, courier_id, order_status);
    res.send(result)
  }
};
