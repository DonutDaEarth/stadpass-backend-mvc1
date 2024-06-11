const { getCourierData } = require('../models/courierModel');
const courierModel = require('../models/courierModel');

module.exports = {
  createCourierData: async function(req, res) {
    const { courier_name, phone_number, courier_picture } = req.body;
    const result = await courierModel.createCourierData(courier_name, phone_number, courier_picture);
    res.send(result);
  },

  deleteCourierData: async function(req, res) {
    const { courier_id } = req.body;
    const result = await courierModel.deleteCourierData(courier_id);
    res.send(result);
  },

  getCourierData: async function(req, res) {
    const result = await courierModel.getCourierData();
    res.send(result);
  },

  updateCourierData: async function(req, res){
    const { courier_name, phone_number, courier_picture, courier_id } = req.body;
    const result = await courierModel.updateCourierData(courier_name, phone_number, courier_picture, courier_id);
    res.send(result);
  }
};