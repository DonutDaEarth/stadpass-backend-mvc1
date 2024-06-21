// customerModel.js
const { Client } = require('pg');
require('dotenv').config();

const client = new Client({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

module.exports = {
  createCustomerData: async function(seat, money) {
    try {
      const query = {
        text: "INSERT INTO customers (seat, money) VALUES ($1, $2)",
        values: [seat, money],
      };
      const res = await client.query(query);
      return res.rows;
    } catch (err) {
      console.error(err.stack);
    }
  },

  deleteCustomerData: async function(customer_id) {
    try {
      await client.connect();
      const query = {
        text: "DELETE FROM customers WHERE customer_id = $1",
        values: [customer_id],
      };
      const res = await client.query(query);
      return res.rows;
    } catch (err) {
      console.error(err.stack);
    }
  },

  getCustomerData: async function() {
    try {
      const res = await client.query("SELECT * FROM customers");
      return res.rows;
    } catch (err) {
      console.error(err.stack);
    }
  },

  updateCustomerData: async function(seat, money, customer_id) {
    try {
      const query = {
        text: "UPDATE customers SET seat = $1, money = $2 WHERE customer_id = $3",
        values: [seat, money, customer_id],
      };
      const res = await client.query(query);
      return res.rowCount; // This will return the number of rows updated.
    } catch (err) {
      console.error(err.stack);
    }
  }
};

client.connect();