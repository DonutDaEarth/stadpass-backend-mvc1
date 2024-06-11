const customerModel = require('../models/customerModel');

module.exports = {
  createCustomerData: async function(req, res) {
    const { seat, money } = req.body;
    const result = await customerModel.createCustomerData(seat, money);
    res.send(result);
  },

  deleteCustomerData: async function(req, res) {
    const { customer_id } = req.body;
    const result = await customerModel.deleteCustomerData(customer_id);
    res.send(result);
  },

  getCustomerData: async function(req, res){
    const result = await customerModel.getCustomerData();
    res.send(result);
  },

  updateCustomerData: async function(req, res) {
    const { seat, money, customer_id } = req.body;
    const result = await customerModel.updateCustomerData(seat, money, customer_id);
    res.send(result);
  }
};